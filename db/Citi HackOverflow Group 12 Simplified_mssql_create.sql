CREATE TABLE [Users] (
	userid integer NOT NULL,
	username varchar(16) NOT NULL UNIQUE,
	firstname varchar(255) NOT NULL,
	lastname varchar(255),
	DOB date(10) NOT NULL DEFAULT '01/01/1990',
	mobileno integer(8) NOT NULL UNIQUE,
	balance float NOT NULL,
  CONSTRAINT [PK_USERS] PRIMARY KEY CLUSTERED
  (
  [userid] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)
GO
CREATE TABLE [Merchants] (
	merchantid integer NOT NULL,
	merchantname varchar(255) NOT NULL UNIQUE,
	UEN string UNIQUE,
	balance float NOT NULL,
  CONSTRAINT [PK_MERCHANTS] PRIMARY KEY CLUSTERED
  (
  [merchantid] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)
GO
CREATE TABLE [Merchant_Sales_Records] (
	saleid integer NOT NULL,
	merchantid integer NOT NULL,
	userid integer NOT NULL,
	datetime timestamp NOT NULL,
	voucherid integer NOT NULL,
	currentprice float NOT NULL,
	finalprice float NOT NULL,
  CONSTRAINT [PK_MERCHANT_SALES_RECORDS] PRIMARY KEY CLUSTERED
  (
  [saleid] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)
GO
CREATE TABLE [Merchant_Voucher_Issuance] (
	voucherid integer NOT NULL,
	merchantid integer NOT NULL,
	discounttype string NOT NULL,
	discountvalue float NOT NULL,
	minspend float NOT NULL,
	price float,
	quantity integer NOT NULL,
	generateQR boolean NOT NULL,
	tandc string NOT NULL,
  CONSTRAINT [PK_MERCHANT_VOUCHER_ISSUANCE] PRIMARY KEY CLUSTERED
  (
  [voucherid] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)
GO
CREATE TABLE [User_Balance__Vouchers] (
	vbalanceid integer NOT NULL,
	userid integer NOT NULL,
	usagestatus boolean NOT NULL,
	quantity integer NOT NULL,
  CONSTRAINT [PK_USER_BALANCE__VOUCHERS] PRIMARY KEY CLUSTERED
  (
  [vbalanceid] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)
GO
CREATE TABLE [User_Topup__Credit] (
	saleid integer NOT NULL UNIQUE,
	userid integer NOT NULL,
	amount float NOT NULL,
	datetime timestamp NOT NULL,
  CONSTRAINT [PK_USER_TOPUP__CREDIT] PRIMARY KEY CLUSTERED
  (
  [saleid] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)
GO
CREATE TABLE [User_Topup__Voucher] (
	vsaleid integer NOT NULL UNIQUE,
	userid integer NOT NULL,
	voucherid integer NOT NULL,
	quantity integer NOT NULL,
	datetime timestamp NOT NULL,
  CONSTRAINT [PK_USER_TOPUP__VOUCHER] PRIMARY KEY CLUSTERED
  (
  [vsaleid] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)
GO


ALTER TABLE [Merchant_Sales_Records] WITH CHECK ADD CONSTRAINT [Merchant_Sales_Records_fk0] FOREIGN KEY ([merchantid]) REFERENCES [Merchants]([merchantid])
ON UPDATE CASCADE
GO
ALTER TABLE [Merchant_Sales_Records] CHECK CONSTRAINT [Merchant_Sales_Records_fk0]
GO
ALTER TABLE [Merchant_Sales_Records] WITH CHECK ADD CONSTRAINT [Merchant_Sales_Records_fk1] FOREIGN KEY ([userid]) REFERENCES [Users]([userid])
ON UPDATE CASCADE
GO
ALTER TABLE [Merchant_Sales_Records] CHECK CONSTRAINT [Merchant_Sales_Records_fk1]
GO
ALTER TABLE [Merchant_Sales_Records] WITH CHECK ADD CONSTRAINT [Merchant_Sales_Records_fk2] FOREIGN KEY ([voucherid]) REFERENCES [Merchant Voucher Issuance]([voucherid])
ON UPDATE CASCADE
GO
ALTER TABLE [Merchant_Sales_Records] CHECK CONSTRAINT [Merchant_Sales_Records_fk2]
GO

ALTER TABLE [Merchant_Voucher_Issuance] WITH CHECK ADD CONSTRAINT [Merchant_Voucher_Issuance_fk0] FOREIGN KEY ([merchantid]) REFERENCES [Merchants]([merchantid])
ON UPDATE CASCADE
GO
ALTER TABLE [Merchant_Voucher_Issuance] CHECK CONSTRAINT [Merchant_Voucher_Issuance_fk0]
GO

ALTER TABLE [User_Balance__Vouchers] WITH CHECK ADD CONSTRAINT [User_Balance__Vouchers_fk0] FOREIGN KEY ([userid]) REFERENCES [Users]([userid])
ON UPDATE CASCADE
GO
ALTER TABLE [User_Balance__Vouchers] CHECK CONSTRAINT [User_Balance__Vouchers_fk0]
GO

ALTER TABLE [User_Topup__Credit] WITH CHECK ADD CONSTRAINT [User_Topup__Credit_fk0] FOREIGN KEY ([userid]) REFERENCES [Users]([userid])
ON UPDATE CASCADE
GO
ALTER TABLE [User_Topup__Credit] CHECK CONSTRAINT [User_Topup__Credit_fk0]
GO

ALTER TABLE [User_Topup__Voucher] WITH CHECK ADD CONSTRAINT [User_Topup__Voucher_fk0] FOREIGN KEY ([userid]) REFERENCES [Users]([userid])
ON UPDATE CASCADE
GO
ALTER TABLE [User_Topup__Voucher] CHECK CONSTRAINT [User_Topup__Voucher_fk0]
GO
ALTER TABLE [User_Topup__Voucher] WITH CHECK ADD CONSTRAINT [User_Topup__Voucher_fk1] FOREIGN KEY ([voucherid]) REFERENCES [Merchant Voucher Issuance]([voucherid])
ON UPDATE CASCADE
GO
ALTER TABLE [User_Topup__Voucher] CHECK CONSTRAINT [User_Topup__Voucher_fk1]
GO

