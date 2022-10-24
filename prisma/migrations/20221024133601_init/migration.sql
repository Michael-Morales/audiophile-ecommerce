-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cartName" TEXT NOT NULL,
    "isNew" BOOLEAN NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "features" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "tablet" TEXT NOT NULL,
    "desktop" TEXT NOT NULL,
    "productImgId" TEXT,
    "productCategoryImgId" TEXT,
    "firstImgId" TEXT,
    "secondImgId" TEXT,
    "thirdImgId" TEXT,
    "otherImgId" TEXT,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Include" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "itemId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "Include_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gallery" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "Gallery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Other" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Other_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OthersOnProducts" (
    "productId" TEXT NOT NULL,
    "otherId" TEXT NOT NULL,

    CONSTRAINT "OthersOnProducts_pkey" PRIMARY KEY ("productId","otherId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Image_productImgId_key" ON "Image"("productImgId");

-- CreateIndex
CREATE UNIQUE INDEX "Image_productCategoryImgId_key" ON "Image"("productCategoryImgId");

-- CreateIndex
CREATE UNIQUE INDEX "Image_firstImgId_key" ON "Image"("firstImgId");

-- CreateIndex
CREATE UNIQUE INDEX "Image_secondImgId_key" ON "Image"("secondImgId");

-- CreateIndex
CREATE UNIQUE INDEX "Image_thirdImgId_key" ON "Image"("thirdImgId");

-- CreateIndex
CREATE UNIQUE INDEX "Image_otherImgId_key" ON "Image"("otherImgId");

-- CreateIndex
CREATE UNIQUE INDEX "Gallery_productId_key" ON "Gallery"("productId");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_productImgId_fkey" FOREIGN KEY ("productImgId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_productCategoryImgId_fkey" FOREIGN KEY ("productCategoryImgId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_firstImgId_fkey" FOREIGN KEY ("firstImgId") REFERENCES "Gallery"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_secondImgId_fkey" FOREIGN KEY ("secondImgId") REFERENCES "Gallery"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_thirdImgId_fkey" FOREIGN KEY ("thirdImgId") REFERENCES "Gallery"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_otherImgId_fkey" FOREIGN KEY ("otherImgId") REFERENCES "Other"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Include" ADD CONSTRAINT "Include_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Include" ADD CONSTRAINT "Include_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gallery" ADD CONSTRAINT "Gallery_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OthersOnProducts" ADD CONSTRAINT "OthersOnProducts_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OthersOnProducts" ADD CONSTRAINT "OthersOnProducts_otherId_fkey" FOREIGN KEY ("otherId") REFERENCES "Other"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
