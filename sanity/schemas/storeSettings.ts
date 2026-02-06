// sanity/schemas/storeSettings.ts

export const storeSettings = {
  name: 'storeSettings',
  title: 'Store Settings',
  type: 'document',
  fields: [
    {
      name: 'storeName',
      title: 'Store Name',
      type: 'string',
      initialValue: 'My Shoes Rwanda',
    },
    {
      name: 'whatsappNumber',
      title: 'WhatsApp Number (international format: 250xxxxxxxxx)',
      type: 'string',
      description: 'Include country code without + sign',
    },
    {
      name: 'defaultCurrency',
      title: 'Default Currency',
      type: 'string',
      initialValue: 'RWF',
    },
    {
      name: 'deliveryFees',
      title: 'Delivery Fees',
      type: 'object',
      fields: [
        {
          name: 'kigali',
          title: 'Kigali (RWF)',
          type: 'number',
          initialValue: 2000,
        },
        {
          name: 'other',
          title: 'Other Regions (RWF)',
          type: 'number',
          initialValue: 5000,
        },
      ],
    },
    {
      name: 'paymentInstructions',
      title: 'Payment Instructions',
      type: 'text',
      description: 'Displayed in cart and checkout',
    },
    {
      name: 'returnPolicy',
      title: 'Return/Exchange Policy',
      type: 'text',
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        {
          name: 'instagram',
          title: 'Instagram URL',
          type: 'string',
        },
        {
          name: 'facebook',
          title: 'Facebook URL',
          type: 'string',
        },
        {
          name: 'twitter',
          title: 'Twitter URL',
          type: 'string',
        },
      ],
    },
  ],
};
