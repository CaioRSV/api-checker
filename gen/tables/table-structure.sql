-- Soon to be Protected by RLS in Supabase (Application-only updates)
CREATE TABLE ApiChecker_Rooms (
  id SERIAL PRIMARY KEY,
  custom_code VARCHAR, -- If None, Hashed ID
  password VARCHAR -- None by default
);

CREATE TABLE ApiChecker_APIs (
  id SERIAL PRIMARY KEY,
  room_id INT REFERENCES ApiChecker_Rooms(id) NOT NULL, -- Required to exist
  url VARCHAR NOT NULL, -- Required
  label VARCHAR, -- Fallback available
  description VARCHAR,
  checkInterval INT, -- In milliseconds
  toleranceType INT, -- Mapped
  allowRedirect BOOLEAN 
);