CREATE TABLE komentar (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nama TEXT NOT NULL,
  peran TEXT CHECK (peran IN ('guru','siswa','umum')) DEFAULT 'siswa',
  penilaian INT CHECK (penilaian BETWEEN 1 AND 5),
  pesan TEXT NOT NULL,
  suka INT DEFAULT 0,
  id_induk UUID REFERENCES komentar(id) ON DELETE CASCADE,
  dibuat_pada TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE komentar ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read" ON komentar FOR SELECT USING (true);
CREATE POLICY "Public insert" ON komentar FOR INSERT WITH CHECK (true);
CREATE POLICY "Public update suka" ON komentar FOR UPDATE USING (true);
