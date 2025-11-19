CREATE DATABASE IF NOT EXISTS bizi_q;

USE bizi_q;

CREATE TABLE responses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    q1_boutique_description TEXT,
    q2_experience_duration VARCHAR(255),
    q2_help_status VARCHAR(255),
    q3_daily_difficulty TEXT,
    q4_sales_process TEXT,
    q5_stock_tracking TEXT,
    q6_product_sourcing_pricing TEXT,
    q7_stock_management_time TEXT,
    q8_accounting_time VARCHAR(255),
    q9_profitable_products_stock_errors TEXT,
    q10_credit_management TEXT,
    q11_ideal_assistant_features TEXT,
    q12_whatsapp_usage BOOLEAN,
    q12_whatsapp_business_usage TEXT,
    q13_whatsapp_assistant_feedback TEXT,
    q14_price_willing_to_pay BIGINT,
    q15_conditions_for_paying TEXT,
    q16_whatsapp_number VARCHAR(255),
    q17_other_interested_businesses TEXT
);
