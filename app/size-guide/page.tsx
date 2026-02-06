// app/size-guide/page.tsx
'use client';

import { HeroSection } from '@/components/HeroSection';

export default function SizeGuidePage() {
  return (
    <>
      <HeroSection
        title="Size Guide"
        subtitle="Find your perfect shoe size"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Intro */}
          <div>
            <h2 className="text-2xl font-bold mb-4">How to Measure Your Shoe Size</h2>
            <p className="text-muted-foreground mb-4">
              Proper shoe sizing ensures comfort and reduces the need for returns. Follow these steps to find your accurate shoe size.
            </p>
          </div>

          {/* Measurement Steps */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Measurement Instructions</h3>
            {[
              {
                number: '1',
                title: 'Measure Your Foot',
                description:
                  'Place your foot on a flat surface with a piece of paper underneath. Mark the heel and the longest toe. Measure the distance in centimeters.',
              },
              {
                number: '2',
                title: 'Compare With Size Chart',
                description:
                  'Use the measurement to find your size in the chart below. Remember, shoe sizes can vary by brand.',
              },
              {
                number: '3',
                title: 'Add Extra Space',
                description:
                  'A good shoe should have about 1-1.5 cm (approximately a thumb width) of space between your longest toe and the end of the shoe.',
              },
              {
                number: '4',
                title: 'Consider Width',
                description:
                  'If you have wider or narrower feet, you may need to go half a size up or down for better comfort.',
              },
            ].map((step) => (
              <div key={step.number} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold">
                  {step.number}
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{step.title}</h4>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Size Charts */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">International Size Conversion</h3>

            {/* Adult Sizes */}
            <div>
              <h4 className="font-semibold mb-3">Adult Shoe Sizes (EUR)</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-border rounded-lg">
                  <thead>
                    <tr className="bg-secondary dark:bg-slate-700">
                      <th className="border-r border-border px-4 py-2 text-left">
                        EU Size
                      </th>
                      <th className="border-r border-border px-4 py-2 text-left">
                        Foot Length (cm)
                      </th>
                      <th className="border-r border-border px-4 py-2 text-left">
                        US Size
                      </th>
                      <th className="px-4 py-2 text-left">UK Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { eu: '35', length: '22.5', us: '4.5', uk: '2' },
                      { eu: '36', length: '23.5', us: '5', uk: '3' },
                      { eu: '37', length: '24', us: '5.5', uk: '4' },
                      { eu: '38', length: '24.5', us: '6', uk: '5' },
                      { eu: '39', length: '25.5', us: '6.5', uk: '5.5' },
                      { eu: '40', length: '26', us: '7', uk: '6' },
                      { eu: '41', length: '26.5', us: '7.5', uk: '7' },
                      { eu: '42', length: '27', us: '8', uk: '7.5' },
                      { eu: '43', length: '27.5', us: '8.5', uk: '8' },
                      { eu: '44', length: '28.5', us: '9.5', uk: '9' },
                      { eu: '45', length: '29', us: '10', uk: '9.5' },
                      { eu: '46', length: '29.5', us: '10.5', uk: '10' },
                    ].map((row) => (
                      <tr
                        key={row.eu}
                        className="border-t border-border hover:bg-secondary/50 transition"
                      >
                        <td className="border-r border-border px-4 py-2 font-semibold">
                          {row.eu}
                        </td>
                        <td className="border-r border-border px-4 py-2">
                          {row.length}
                        </td>
                        <td className="border-r border-border px-4 py-2">
                          {row.us}
                        </td>
                        <td className="px-4 py-2">{row.uk}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Kids Sizes */}
            <div>
              <h4 className="font-semibold mb-3">Kids Shoe Sizes (EUR)</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-border rounded-lg">
                  <thead>
                    <tr className="bg-secondary dark:bg-slate-700">
                      <th className="border-r border-border px-4 py-2 text-left">
                        EU Size
                      </th>
                      <th className="border-r border-border px-4 py-2 text-left">
                        Foot Length (cm)
                      </th>
                      <th className="px-4 py-2 text-left">Approximate Age</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { eu: '20', length: '12.5', age: '6-12 months' },
                      { eu: '21', length: '13', age: '1 year' },
                      { eu: '22', length: '13.5', age: '1.5 years' },
                      { eu: '23', length: '14.5', age: '2-2.5 years' },
                      { eu: '24', length: '15', age: '2.5-3 years' },
                      { eu: '25', length: '15.5', age: '3-3.5 years' },
                      { eu: '26', length: '16.5', age: '4 years' },
                      { eu: '27', length: '17', age: '4.5-5 years' },
                      { eu: '28', length: '17.5', age: '5.5 years' },
                      { eu: '29', length: '18', age: '6 years' },
                      { eu: '30', length: '19', age: '6.5-7 years' },
                    ].map((row) => (
                      <tr
                        key={row.eu}
                        className="border-t border-border hover:bg-secondary/50 transition"
                      >
                        <td className="border-r border-border px-4 py-2 font-semibold">
                          {row.eu}
                        </td>
                        <td className="border-r border-border px-4 py-2">
                          {row.length}
                        </td>
                        <td className="px-4 py-2">{row.age}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div>
            <h3 className="text-xl font-bold mb-4">Tips for Perfect Fit</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>✓ Measure your feet in the afternoon (they swell throughout the day)</li>
              <li>✓ Wear the type of socks you'll wear with the shoes when measuring</li>
              <li>✓ Always measure both feet (they may be different sizes)</li>
              <li>✓ If between sizes, choose the larger size for comfort</li>
              <li>✓ Different brands may fit differently; consult product reviews</li>
              <li>✓ Remember you have 30 days to exchange if the fit isn't right</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
