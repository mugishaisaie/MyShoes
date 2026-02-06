// app/shipping-returns/page.tsx
'use client';

import { HeroSection } from '@/components/HeroSection';

export default function ShippingReturnsPage() {
  return (
    <>
      <HeroSection
        title="Shipping & Returns"
        subtitle="We make shopping easy and worry-free"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Shipping */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Shipping Information</h2>

            <div className="space-y-6">
              {/* Delivery Options */}
              <div>
                <h3 className="text-xl font-bold mb-4">Delivery Options</h3>
                <div className="space-y-4">
                  {[
                    {
                      region: 'Kigali',
                      time: '2-3 business days',
                      fee: '2,000 RWF',
                      description: 'Standard delivery to Kigali and surrounding areas',
                    },
                    {
                      region: 'Other Provinces',
                      time: '3-5 business days',
                      fee: '5,000 RWF',
                      description: 'Delivery to all other regions of Rwanda',
                    },
                  ].map((option) => (
                    <div
                      key={option.region}
                      className="border border-border rounded-lg p-4"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-lg">
                          {option.region}
                        </h4>
                        <span className="text-accent font-bold">
                          {option.fee}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {option.time}
                      </p>
                      <p className="text-sm">{option.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* How It Works */}
              <div>
                <h3 className="text-xl font-bold mb-4">
                  Shipping Process
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      step: 'Order Confirmation',
                      description:
                        'After you send your order via WhatsApp, our team reviews it and confirms receipt.',
                    },
                    {
                      step: 'Payment Request',
                      description:
                        'We send payment instructions via WhatsApp (Mobile Money or Bank Transfer).',
                    },
                    {
                      step: 'Payment Verification',
                      description:
                        'Once payment is received, your order is confirmed and prepared for shipment.',
                    },
                    {
                      step: 'Dispatch & Delivery',
                      description:
                        'Your package is dispatched and you receive tracking information. Delivery within estimated timeframe.',
                    },
                    {
                      step: 'Delivery & Inspection',
                      description:
                        'Receive your package and inspect items. You have 48 hours to report any issues.',
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold">{item.step}</h4>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Methods */}
              <div>
                <h3 className="text-xl font-bold mb-4">
                  Payment Methods
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>We accept the following payment methods:</p>
                  <ul className="space-y-2">
                    <li>✓ MTN Mobile Money (USSD: *182#)</li>
                    <li>✓ Airtel Money (USSD: *185#)</li>
                    <li>✓ Bank Transfer (Details provided after order confirmation)</li>
                    <li>✓ Cash on Delivery (for Kigali - additional 500 RWF fee)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Returns & Exchanges */}
          <section className="border-t border-border pt-12">
            <h2 className="text-3xl font-bold mb-6">
              Returns & Exchange Policy
            </h2>

            <div className="space-y-6">
              {/* Eligibility */}
              <div>
                <h3 className="text-xl font-bold mb-4">
                  Return Eligibility
                </h3>
                <p className="text-muted-foreground mb-4">
                  We offer a 30-day return and exchange policy for unworn shoes in original condition.
                </p>
                <div className="bg-secondary/50 dark:bg-slate-800 rounded-lg p-4 space-y-2">
                  <p className="font-semibold">Items eligible for return must:</p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>✓ Be unused and unworn (no signs of wear)</li>
                    <li>✓ Have original packaging and all tags intact</li>
                    <li>
                      ✓ Be returned within 30 days of delivery
                    </li>
                    <li>✓ Be in original condition</li>
                    <li>✓ Include all original accessories/insoles</li>
                  </ul>
                </div>
              </div>

              {/* Non-Returnable Items */}
              <div>
                <h3 className="text-xl font-bold mb-4">
                  Non-Returnable Items
                </h3>
                <p className="text-muted-foreground mb-2">
                  The following items cannot be returned:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>✗ Worn or damaged shoes</li>
                  <li>✗ Items without original packaging</li>
                  <li>✗ Custom-ordered or made-to-order items</li>
                  <li>✗ Clearance or final sale items</li>
                </ul>
              </div>

              {/* Return Process */}
              <div>
                <h3 className="text-xl font-bold mb-4">
                  How to Return/Exchange
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      step: 1,
                      title: 'Contact Us',
                      description:
                        'Send a WhatsApp message with your order details and reason for return.',
                    },
                    {
                      step: 2,
                      title: 'Get Return Label',
                      description:
                        'We provide return shipping instructions and label. Return shipping is paid by you (RWF 1,000-2,000).',
                    },
                    {
                      step: 3,
                      title: 'Ship Back',
                      description:
                        'Pack the shoes securely and send to our address following the provided instructions.',
                    },
                    {
                      step: 4,
                      title: 'Inspection',
                      description:
                        'We inspect the shoes and process your refund or exchange within 5-7 business days.',
                    },
                    {
                      step: 5,
                      title: 'Refund/New Item',
                      description:
                        'Receive refund via Mobile Money or replacement shoes are shipped.',
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Defective Items */}
              <div>
                <h3 className="text-xl font-bold mb-4">
                  Defective Items
                </h3>
                <p className="text-muted-foreground">
                  If you receive defective or damaged shoes, report within{' '}
                  <span className="font-bold">48 hours</span> with photos
                  via WhatsApp. We will replace the item at no cost or provide a full
                  refund.
                </p>
              </div>

              {/* Refund Timeline */}
              <div>
                <h3 className="text-xl font-bold mb-4">
                  Refund Timeline
                </h3>
                <div className="space-y-3 text-sm">
                  <p className="flex justify-between">
                    <span className="text-muted-foreground">
                      Return shipped:
                    </span>
                    <span>Customer responsibility</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-muted-foreground">
                      Inspection time:
                    </span>
                    <span>2-3 business days</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-muted-foreground">
                      Refund processing:
                    </span>
                    <span>3-5 business days</span>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="border-t border-border pt-12">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

            <div className="space-y-4">
              {[
                {
                  q: 'How long does delivery take?',
                  a: 'Kigali: 2-3 business days. Other provinces: 3-5 business days. Delivery timeframes are from confirmed payment date.',
                },
                {
                  q: 'Can I track my order?',
                  a: 'Yes! After dispatch, we provide WhatsApp updates with tracking details.',
                },
                {
                  q: 'Do you deliver to all parts of Rwanda?',
                  a: 'Yes, we deliver nationwide. Remote areas may take 5-7 business days.',
                },
                {
                  q: 'Is there a free exchange for wrong size?',
                  a: 'Yes, if you order the wrong size, we exchange free within 7 days (return shipping covered by us if our mistake).',
                },
                {
                  q: 'What if shoes are damaged in transit?',
                  a: 'Report within 48 hours with photos. We replace or refund immediately at no cost.',
                },
              ].map((faq, i) => (
                <details key={i} className="group border border-border rounded-lg">
                  <summary className="px-4 py-3 cursor-pointer font-semibold group-open:border-b group-open:border-border">
                    {faq.q}
                  </summary>
                  <p className="px-4 py-3 text-sm text-muted-foreground">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
