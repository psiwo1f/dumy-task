// these formatters are based on the data format shared in Readme file

const formatDummyjsonData = (data) => {
  return {
    count: data.total,
    items: data.products.map((product) => ({
      id: product.id,
      title: product.title,
      description: product.description,
      category: product.category,
      price: product.price,
      discountPercentage: product.discountPercentage,
      rating: product.rating,
      stock: product.stock,
      tags: product.tags,
      brand: product.brand,
      sku: product.sku,
      weight: product.weight,
      dimensions: {
        width: product.dimensions.width,
        height: product.dimensions.height,
        depth: product.dimensions.depth,
      },
      warrantyInformation: product.warrantyInformation,
      shippingInformation: product.shippingInformation,
      availabilityStatus: product.availabilityStatus,
      reviews: product.reviews.map((review) => ({
        rating: review.rating,
        comment: review.comment,
        date: review.date,
        reviewerName: review.reviewerName,
        reviewerEmail: review.reviewerEmail,
      })),
      returnPolicy: product.returnPolicy,
      minimumOrderQuantity: product.minimumOrderQuantity,
      meta: {
        createdAt: product.meta.createdAt,
        updatedAt: product.meta.updatedAt,
        barcode: product.meta.barcode,
        qrCode: product.meta.qrCode,
      },
      thumbnail: product.thumbnail,
      images: product.images,
    })),
    // for pagination
    limit: data.limit,
    skip: data.skip,
  };
};

const formatSmartjsonData = (data) => {
  return {
    count: data.summary.totalItems,
    items: data.items.map((item) => ({
      id: item.itemId,
      title: item.name,
      description: item.details.description,
      category: item.details.category,
      price: item.details.price,
      discountPercentage: item.details.discount,
      rating: item.stars,
      stock: item.inventory.available,
      tags: item.attributes.tags,
      brand: item.attributes.brand,
      sku: item.attributes.sku,
      weight: item.attributes.weightInGrams,
      dimensions: {
        width: item.attributes.dimensions.widthCm,
        height: item.attributes.dimensions.heightCm,
        depth: item.attributes.dimensions.depthCm,
      },
      warrantyInformation: item.policies.warranty,
      shippingInformation: item.policies.shipping,
      availabilityStatus: item.inventory.status,
      reviews: item.reviews.map((review) => ({
        rating: review.stars,
        comment: review.feedback,
        date: review.date,
        reviewerName: review.reviewer.name,
        reviewerEmail: review.reviewer.email,
      })),
      returnPolicy: item.policies.return,
      minimumOrderQuantity: item.policies.minOrderQty,
      meta: {
        createdAt: item.metadata.createdOn,
        updatedAt: item.metadata.updatedOn,
        barcode: item.metadata.barcode,
        qrCode: item.metadata.qrCode,
      },
      thumbnail: item.media.thumbnailUrl,
      images: item.media.imageUrls,
    })),
    // for pagination
    limit: data.summary.itemsPerPage,
    skip: data.summary.itemsSkipped,
  };
};

// for any new data source, add a new formatter here

// add that new formatter to the switch case below

const formatData = (data, source) => {
  switch (source) {
    case 'dummyjson':
      return formatDummyjsonData(data);
    case 'smartjson':
      return formatSmartjsonData(data);
    default:
      throw new Error('Unknown data source');
  }
};

module.exports = {
  formatData,
};
