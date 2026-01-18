-- ============================================
-- DigiSchool Africa V2.2.x-C — Supabase Schema
-- Date: 18 Janvier 2026
-- Purpose: Stockage sécurisé données clients
-- ============================================

-- EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_cron";

-- ============================================
-- 1. LEADS / PROSPECTS
-- ============================================
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  first_name TEXT,
  last_name TEXT,
  phone TEXT,
  source TEXT CHECK (source IN ('b2c-assessment', 'checkout', 'b2b-form', 'b2c-ideas', 'manual')),
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'converted', 'inactive')),
  metadata JSONB DEFAULT '{}'::JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_source ON leads(source);
CREATE INDEX idx_leads_created_at ON leads(created_at DESC);

-- ============================================
-- 2. AUTO-EVALUATIONS
-- ============================================
CREATE TABLE IF NOT EXISTS assessments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  answers JSONB NOT NULL,
  user_type TEXT,
  priority_formation TEXT,
  complementary_formations JSONB,
  diagnostic_text TEXT,
  score INTEGER,
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  metadata JSONB DEFAULT '{}'::JSONB
);

CREATE INDEX idx_assessments_lead_id ON assessments(lead_id);
CREATE INDEX idx_assessments_email ON assessments(email);
CREATE INDEX idx_assessments_completed_at ON assessments(completed_at DESC);

-- ============================================
-- 3. DEMANDES DE PAIEMENT
-- ============================================
CREATE TABLE IF NOT EXISTS payment_requests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lead_id UUID REFERENCES leads(id) ON DELETE SET NULL,
  email TEXT NOT NULL,
  selected_modules JSONB NOT NULL,
  total_price INTEGER NOT NULL CHECK (total_price > 0),
  currency TEXT DEFAULT 'XOF' CHECK (currency IN ('XOF', 'EUR', 'USD')),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'proof_submitted', 'verified', 'rejected', 'expired')),
  payment_reference TEXT UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  expires_at TIMESTAMP WITH TIME ZONE DEFAULT (NOW() + INTERVAL '30 days'),
  metadata JSONB DEFAULT '{}'::JSONB
);

CREATE INDEX idx_payment_requests_lead_id ON payment_requests(lead_id);
CREATE INDEX idx_payment_requests_email ON payment_requests(email);
CREATE INDEX idx_payment_requests_status ON payment_requests(status);
CREATE INDEX idx_payment_requests_created_at ON payment_requests(created_at DESC);

-- ============================================
-- 4. PREUVES DE PAIEMENT
-- ============================================
CREATE TABLE IF NOT EXISTS payment_proofs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  payment_request_id UUID REFERENCES payment_requests(id) ON DELETE CASCADE,
  payment_type TEXT NOT NULL CHECK (payment_type IN ('bank', 'mobile_money', 'western_union', 'moneygram', 'other')),
  transaction_ref TEXT NOT NULL,
  proof_file_url TEXT,
  proof_file_name TEXT,
  proof_file_size INTEGER,
  comment TEXT,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  verified_at TIMESTAMP WITH TIME ZONE,
  verified_by UUID, -- Admin user
  verification_notes TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  metadata JSONB DEFAULT '{}'::JSONB
);

CREATE INDEX idx_payment_proofs_request_id ON payment_proofs(payment_request_id);
CREATE INDEX idx_payment_proofs_status ON payment_proofs(status);
CREATE INDEX idx_payment_proofs_submitted_at ON payment_proofs(submitted_at DESC);

-- ============================================
-- 5. ENTITLEMENTS (DROITS D'ACCÈS)
-- ============================================
CREATE TABLE IF NOT EXISTS entitlements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  module_id TEXT NOT NULL,
  module_name TEXT NOT NULL,
  payment_request_id UUID REFERENCES payment_requests(id) ON DELETE SET NULL,
  granted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  expires_at TIMESTAMP WITH TIME ZONE, -- NULL = illimité
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'suspended', 'expired', 'revoked')),
  granted_by UUID, -- Admin user
  metadata JSONB DEFAULT '{}'::JSONB
);

CREATE INDEX idx_entitlements_lead_id ON entitlements(lead_id);
CREATE INDEX idx_entitlements_email ON entitlements(email);
CREATE INDEX idx_entitlements_module_id ON entitlements(module_id);
CREATE INDEX idx_entitlements_status ON entitlements(status);

-- ============================================
-- 6. DEMANDES B2B SUR-MESURE
-- ============================================
CREATE TABLE IF NOT EXISTS b2b_custom_requests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  request_number TEXT UNIQUE NOT NULL,
  company_name TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  sector TEXT,
  company_size TEXT,
  training_objectives TEXT NOT NULL,
  training_prompt TEXT,
  attachment_url TEXT,
  attachment_name TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'analyzing', 'proposal_sent', 'accepted', 'declined', 'cancelled')),
  proposal_sent_at TIMESTAMP WITH TIME ZONE,
  proposal_url TEXT,
  proposal_amount INTEGER,
  accepted_at TIMESTAMP WITH TIME ZONE,
  assigned_to UUID, -- Admin/analyst
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  metadata JSONB DEFAULT '{}'::JSONB
);

CREATE INDEX idx_b2b_custom_email ON b2b_custom_requests(email);
CREATE INDEX idx_b2b_custom_status ON b2b_custom_requests(status);
CREATE INDEX idx_b2b_custom_created_at ON b2b_custom_requests(created_at DESC);

-- ============================================
-- 7. BOÎTE À IDÉES B2C
-- ============================================
CREATE TABLE IF NOT EXISTS b2c_ideas (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  idea_number TEXT UNIQUE NOT NULL,
  email TEXT NOT NULL,
  submitter_name TEXT,
  training_title TEXT,
  training_url TEXT,
  description TEXT NOT NULL,
  category TEXT,
  votes INTEGER DEFAULT 0,
  status TEXT DEFAULT 'submitted' CHECK (status IN ('submitted', 'reviewing', 'approved', 'implemented', 'declined')),
  reviewed_at TIMESTAMP WITH TIME ZONE,
  reviewed_by UUID,
  reviewer_notes TEXT,
  implementation_date TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  metadata JSONB DEFAULT '{}'::JSONB
);

CREATE INDEX idx_b2c_ideas_email ON b2c_ideas(email);
CREATE INDEX idx_b2c_ideas_status ON b2c_ideas(status);
CREATE INDEX idx_b2c_ideas_votes ON b2c_ideas(votes DESC);
CREATE INDEX idx_b2c_ideas_created_at ON b2c_ideas(created_at DESC);

-- ============================================
-- 8. AUDIT LOG
-- ============================================
CREATE TABLE IF NOT EXISTS audit_log (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  entity_type TEXT NOT NULL,
  entity_id UUID,
  action TEXT NOT NULL,
  actor_id UUID,
  actor_email TEXT,
  actor_ip TEXT,
  changes JSONB,
  metadata JSONB DEFAULT '{}'::JSONB,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_audit_entity_type ON audit_log(entity_type);
CREATE INDEX idx_audit_entity_id ON audit_log(entity_id);
CREATE INDEX idx_audit_timestamp ON audit_log(timestamp DESC);

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

-- Leads: users see only their own
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users view own leads" ON leads
  FOR SELECT
  USING (auth.email() = email);

CREATE POLICY "Admins full access leads" ON leads
  FOR ALL
  USING (auth.role() = 'authenticated' AND auth.jwt()->>'role' = 'admin');

-- Assessments: users see own assessments
ALTER TABLE assessments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users view own assessments" ON assessments
  FOR SELECT
  USING (auth.email() = email);

CREATE POLICY "Admins full access assessments" ON assessments
  FOR ALL
  USING (auth.role() = 'authenticated' AND auth.jwt()->>'role' = 'admin');

-- Payment Requests: users see own requests
ALTER TABLE payment_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users view own payment requests" ON payment_requests
  FOR SELECT
  USING (auth.email() = email);

CREATE POLICY "Users insert own payment requests" ON payment_requests
  FOR INSERT
  WITH CHECK (auth.email() = email);

CREATE POLICY "Admins full access payment requests" ON payment_requests
  FOR ALL
  USING (auth.role() = 'authenticated' AND auth.jwt()->>'role' = 'admin');

-- Payment Proofs: users see own proofs
ALTER TABLE payment_proofs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users view own payment proofs" ON payment_proofs
  FOR SELECT
  USING (
    payment_request_id IN (
      SELECT id FROM payment_requests WHERE email = auth.email()
    )
  );

CREATE POLICY "Users insert own payment proofs" ON payment_proofs
  FOR INSERT
  WITH CHECK (
    payment_request_id IN (
      SELECT id FROM payment_requests WHERE email = auth.email()
    )
  );

CREATE POLICY "Admins full access payment proofs" ON payment_proofs
  FOR ALL
  USING (auth.role() = 'authenticated' AND auth.jwt()->>'role' = 'admin');

-- Entitlements: users see own entitlements
ALTER TABLE entitlements ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users view own entitlements" ON entitlements
  FOR SELECT
  USING (auth.email() = email);

CREATE POLICY "Admins full access entitlements" ON entitlements
  FOR ALL
  USING (auth.role() = 'authenticated' AND auth.jwt()->>'role' = 'admin');

-- B2B Custom Requests: users see own requests
ALTER TABLE b2b_custom_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users view own b2b requests" ON b2b_custom_requests
  FOR SELECT
  USING (auth.email() = email);

CREATE POLICY "Users insert own b2b requests" ON b2b_custom_requests
  FOR INSERT
  WITH CHECK (TRUE); -- Anyone can submit

CREATE POLICY "Admins full access b2b requests" ON b2b_custom_requests
  FOR ALL
  USING (auth.role() = 'authenticated' AND auth.jwt()->>'role' = 'admin');

-- B2C Ideas: public read, authenticated insert
ALTER TABLE b2c_ideas ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view ideas" ON b2c_ideas
  FOR SELECT
  USING (TRUE);

CREATE POLICY "Authenticated users can submit ideas" ON b2c_ideas
  FOR INSERT
  WITH CHECK (TRUE);

CREATE POLICY "Admins full access ideas" ON b2c_ideas
  FOR ALL
  USING (auth.role() = 'authenticated' AND auth.jwt()->>'role' = 'admin');

-- Audit Log: admins only
ALTER TABLE audit_log ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins full access audit log" ON audit_log
  FOR ALL
  USING (auth.role() = 'authenticated' AND auth.jwt()->>'role' = 'admin');

-- ============================================
-- FUNCTIONS & TRIGGERS
-- ============================================

-- Update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_leads_updated_at
  BEFORE UPDATE ON leads
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_payment_requests_updated_at
  BEFORE UPDATE ON payment_requests
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_b2b_custom_updated_at
  BEFORE UPDATE ON b2b_custom_requests
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

-- Generate request numbers
CREATE OR REPLACE FUNCTION generate_b2b_request_number()
RETURNS TRIGGER AS $$
BEGIN
  NEW.request_number = 'B2B-' || TO_CHAR(NOW(), 'YYYYMMDD') || '-' || LPAD(NEXTVAL('b2b_request_seq')::TEXT, 4, '0');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE SEQUENCE IF NOT EXISTS b2b_request_seq START 1;

CREATE TRIGGER generate_b2b_request_number_trigger
  BEFORE INSERT ON b2b_custom_requests
  FOR EACH ROW
  WHEN (NEW.request_number IS NULL)
  EXECUTE FUNCTION generate_b2b_request_number();

CREATE OR REPLACE FUNCTION generate_idea_number()
RETURNS TRIGGER AS $$
BEGIN
  NEW.idea_number = 'IDEA-' || TO_CHAR(NOW(), 'YYYYMMDD') || '-' || LPAD(NEXTVAL('idea_seq')::TEXT, 4, '0');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE SEQUENCE IF NOT EXISTS idea_seq START 1;

CREATE TRIGGER generate_idea_number_trigger
  BEFORE INSERT ON b2c_ideas
  FOR EACH ROW
  WHEN (NEW.idea_number IS NULL)
  EXECUTE FUNCTION generate_idea_number();

-- ============================================
-- STORAGE BUCKETS (via Supabase Dashboard)
-- ============================================
-- payment-proofs (private)
-- b2b-attachments (private)
-- certificates (public)
-- badges (public)

-- ============================================
-- INITIAL DATA (Optional)
-- ============================================

-- Admin user (à créer via Supabase Auth)
-- email: admin@digischool.africa
-- role: admin

COMMENT ON TABLE leads IS 'Tous les prospects et clients DigiSchool';
COMMENT ON TABLE assessments IS 'Résultats auto-évaluations B2C';
COMMENT ON TABLE payment_requests IS 'Demandes de paiement formations';
COMMENT ON TABLE payment_proofs IS 'Preuves de paiement uploadées';
COMMENT ON TABLE entitlements IS 'Droits d''accès formations (post-paiement)';
COMMENT ON TABLE b2b_custom_requests IS 'Demandes formations B2B sur-mesure (72h)';
COMMENT ON TABLE b2c_ideas IS 'Suggestions formations B2C par utilisateurs';
COMMENT ON TABLE audit_log IS 'Historique complet des actions';

