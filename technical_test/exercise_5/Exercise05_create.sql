-- tables
-- Table: BILL
CREATE TABLE BILL (
    Bill_ID int  NOT NULL,
    SalePerson_ID int  NOT NULL,
    Region_ID int  NOT NULL,
    Reference varchar(100)  NOT NULL,
    CONSTRAINT BILL_pk PRIMARY KEY  (Bill_ID)
);

-- Table: PRODUCTS
CREATE TABLE PRODUCTS (
    Product_ID int  NOT NULL,
    ProductName varchar(100)  NOT NULL,
    CONSTRAINT PRODUCTS_pk PRIMARY KEY  (Product_ID)
);

-- Table: REGION
CREATE TABLE REGION (
    Region_ID int  NOT NULL,
    TypeAccount varchar(100)  NOT NULL,
    Region varchar(100)  NOT NULL,
    CONSTRAINT REGION_pk PRIMARY KEY  (Region_ID)
);

-- Table: SALE_DETAIL
CREATE TABLE SALE_DETAIL (
    SailDetail_ID int  NOT NULL,
    Ammount numeric(10,0)  NOT NULL,
    Product_ID int  NOT NULL,
    Bill_ID int  NOT NULL,
    CONSTRAINT SALE_DETAIL_pk PRIMARY KEY  (SailDetail_ID)
);

-- Table: SALE_PERSON
CREATE TABLE SALE_PERSON (
    SalePerson_ID int  NOT NULL,
    Reference varchar(100)  NOT NULL,
    CONSTRAINT SALE_PERSON_pk PRIMARY KEY  (SalePerson_ID)
);

-- foreign keys
-- Reference: T_BILL_T_REGION (table: BILL)
ALTER TABLE BILL ADD CONSTRAINT T_BILL_T_REGION
    FOREIGN KEY (Region_ID)
    REFERENCES REGION (Region_ID);

-- Reference: T_BILL_T_SALE_PERSON (table: BILL)
ALTER TABLE BILL ADD CONSTRAINT T_BILL_T_SALE_PERSON
    FOREIGN KEY (SalePerson_ID)
    REFERENCES SALE_PERSON (SalePerson_ID);

-- Reference: T_SALE_DETAIL_T_BILL (table: SALE_DETAIL)
ALTER TABLE SALE_DETAIL ADD CONSTRAINT T_SALE_DETAIL_T_BILL
    FOREIGN KEY (Bill_ID)
    REFERENCES BILL (Bill_ID);

-- Reference: T_SALE_DETAIL_T_PRODUCTS (table: SALE_DETAIL)
ALTER TABLE SALE_DETAIL ADD CONSTRAINT T_SALE_DETAIL_T_PRODUCTS
    FOREIGN KEY (Product_ID)
    REFERENCES PRODUCTS (Product_ID);

-- End of file.

