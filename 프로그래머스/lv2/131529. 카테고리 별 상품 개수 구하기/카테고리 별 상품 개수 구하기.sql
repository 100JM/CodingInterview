-- 코드를 입력하세요
SELECT
    SUBSTRING(PRODUCT_CODE, 1,2),
    COUNT(PRODUCT_ID)
FROM 
    PRODUCT
GROUP BY
    SUBSTRING(PRODUCT_CODE, 1,2)