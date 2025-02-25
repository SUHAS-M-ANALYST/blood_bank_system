CREATE DATABASE blood_bank;

USE blood_bank;

CREATE TABLE donors (
  donor_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  blood_group VARCHAR(10) NOT NULL,
  contact VARCHAR(15) NOT NULL,
  address VARCHAR(255),
  last_donation_date DATE
);

CREATE TABLE inventory (
  blood_id INT AUTO_INCREMENT PRIMARY KEY,
  blood_group VARCHAR(10) NOT NULL,
  units_available INT NOT NULL
);

CREATE TABLE requests (
  request_id INT AUTO_INCREMENT PRIMARY KEY,
  patient_name VARCHAR(100) NOT NULL,
  blood_group VARCHAR(10) NOT NULL,
  units_required INT NOT NULL,
  hospital_name VARCHAR(100) NOT NULL,
  status VARCHAR(20) DEFAULT 'Pending'
);