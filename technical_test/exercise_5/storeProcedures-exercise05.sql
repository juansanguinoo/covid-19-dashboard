
-- 1. How much Hardware and Software was sold for the global Accounts?

CREATE PROCEDURE hardwareAndSoftwareByGlobalAccount
as

SELECT r.TypeAccount, sum(sd.Amount) as [Sale by Global Account]
FROM BILL as b
INNER JOIN REGION as r on b.Region_ID = r.Region_ID
INNER JOIN SALE_DETAIL as sd on b.Bill_ID = sd.Bill_ID
WHERE r.TypeAccount = 'Global Account'
group by r.TypeAccount
go

exec hardwareAndSoftwareByGlobalAccount


-- 2. How much was sold by Region?

CREATE PROCEDURE soldByRegion
as

SELECT r.Region, sum(sd.Amount) as [Sale by Region]
FROM BILL as b
INNER JOIN REGION as r on b.Region_ID = r.Region_ID
INNER JOIN SALE_DETAIL as sd on b.Bill_ID = sd.Bill_ID
group by r.Region
order by 2 asc

go
exec soldByRegion




-- 3. How much was sold by kind of Product?

CREATE PROCEDURE soldByProduct
as

SELECT p.ProductName, sum(sd.Amount) as [Sale by Product]
FROM BILL as b
INNER JOIN SALE_DETAIL as sd on b.Bill_ID = sd.Bill_ID
INNER JOIN PRODUCTS as p on sd.Product_ID = p.Product_ID
group by p.ProductName
order by 2 asc

go
exec soldByRegion
