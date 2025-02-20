import React from 'react';

const organs = [
  {
    name: 'Brain',
    image: 'https://voaxktqgbljtsattacbn.supabase.co/storage/v1/object/sign/sahasra-hospital-images/Jyothi-Diagnosis/organs-images/human-brain-image.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzYWhhc3JhLWhvc3BpdGFsLWltYWdlcy9KeW90aGktRGlhZ25vc2lzL29yZ2Fucy1pbWFnZXMvaHVtYW4tYnJhaW4taW1hZ2Uud2VicCIsImlhdCI6MTczOTk2Mzc0MCwiZXhwIjoxODk3NjQzNzQwfQ.GuYq7YrZryFrmYJJpS4Bx3WcVc4Un_Dez67HkACXSWQ',
  },
  {
    name: 'Lungs',
    image: 'https://voaxktqgbljtsattacbn.supabase.co/storage/v1/object/sign/sahasra-hospital-images/Jyothi-Diagnosis/organs-images/human-Lungs-image.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzYWhhc3JhLWhvc3BpdGFsLWltYWdlcy9KeW90aGktRGlhZ25vc2lzL29yZ2Fucy1pbWFnZXMvaHVtYW4tTHVuZ3MtaW1hZ2Uud2VicCIsImlhdCI6MTczOTk2NjUwMCwiZXhwIjoxODk3NjQ2NTAwfQ.DAHfD5b__0FJUzaoiRoh1vAApmfR6eXx6Ce2dSGzL-0',
  },
  {
    name: 'Liver',
    image: 'https://voaxktqgbljtsattacbn.supabase.co/storage/v1/object/sign/sahasra-hospital-images/Jyothi-Diagnosis/organs-images/human-Liver-image.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzYWhhc3JhLWhvc3BpdGFsLWltYWdlcy9KeW90aGktRGlhZ25vc2lzL29yZ2Fucy1pbWFnZXMvaHVtYW4tTGl2ZXItaW1hZ2Uud2VicCIsImlhdCI6MTczOTk2NjQ0NiwiZXhwIjoxODk3NjQ2NDQ2fQ.1Yd2ITUOhVruKbdB8i8BJDzan_aYUJIqJCzCx6xaEyM',
  },
  {
    name: 'Kidney',
    image: 'https://voaxktqgbljtsattacbn.supabase.co/storage/v1/object/sign/sahasra-hospital-images/Jyothi-Diagnosis/organs-images/human-kidneys-image.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzYWhhc3JhLWhvc3BpdGFsLWltYWdlcy9KeW90aGktRGlhZ25vc2lzL29yZ2Fucy1pbWFnZXMvaHVtYW4ta2lkbmV5cy1pbWFnZS53ZWJwIiwiaWF0IjoxNzM5OTY2MzQ4LCJleHAiOjE4OTc2NDYzNDh9._KmF1MTzGGMA0wtK-junRjB8mHT64sHgUBIBd5vitqY',
  },
  {
    name: 'Heart',
    image: 'https://voaxktqgbljtsattacbn.supabase.co/storage/v1/object/sign/sahasra-hospital-images/Jyothi-Diagnosis/organs-images/human-heart-image.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzYWhhc3JhLWhvc3BpdGFsLWltYWdlcy9KeW90aGktRGlhZ25vc2lzL29yZ2Fucy1pbWFnZXMvaHVtYW4taGVhcnQtaW1hZ2Uud2VicCIsImlhdCI6MTczOTk2NjMwMiwiZXhwIjoxODk3NjQ2MzAyfQ.6mGXpnHlchqCfukAQCVePvWisa41DSBmSZpr2EBuFpg',
  },
  {
    name: 'Thyroid Gland',
    image: 'https://voaxktqgbljtsattacbn.supabase.co/storage/v1/object/sign/sahasra-hospital-images/Jyothi-Diagnosis/organs-images/human-thyroid-gland-image.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzYWhhc3JhLWhvc3BpdGFsLWltYWdlcy9KeW90aGktRGlhZ25vc2lzL29yZ2Fucy1pbWFnZXMvaHVtYW4tdGh5cm9pZC1nbGFuZC1pbWFnZS53ZWJwIiwiaWF0IjoxNzM5OTY2ODAyLCJleHAiOjE4OTc2NDY4MDJ9.dKGuKkwrhhw-bxYrpjbRQkgEEDPEKS2NtYeI2hPQ0qc',
  },
  {
    name: 'Thymus Gland',
    image: 'https://voaxktqgbljtsattacbn.supabase.co/storage/v1/object/sign/sahasra-hospital-images/Jyothi-Diagnosis/organs-images/human-thymus-gland-image.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzYWhhc3JhLWhvc3BpdGFsLWltYWdlcy9KeW90aGktRGlhZ25vc2lzL29yZ2Fucy1pbWFnZXMvaHVtYW4tdGh5bXVzLWdsYW5kLWltYWdlLndlYnAiLCJpYXQiOjE3Mzk5NjY2NTksImV4cCI6MTg5NzY0NjY1OX0.Mda-4LlVSo0VWjsMMI6Z5kEhpWzaZrTvBFon0W3mQzk',
  },
  {
    name: 'Spinal Cord',
    image: 'https://voaxktqgbljtsattacbn.supabase.co/storage/v1/object/sign/sahasra-hospital-images/Jyothi-Diagnosis/organs-images/human-spinal-cord-image.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzYWhhc3JhLWhvc3BpdGFsLWltYWdlcy9KeW90aGktRGlhZ25vc2lzL29yZ2Fucy1pbWFnZXMvaHVtYW4tc3BpbmFsLWNvcmQtaW1hZ2Uud2VicCIsImlhdCI6MTczOTk2NjYwMywiZXhwIjoxODk3NjQ2NjAzfQ.XBpMK6R775u9TJHkNGhDe_iGb3W7SK9NiSTq7_8h32Y',
  },
  {
    name: 'Bone',
    image: 'https://voaxktqgbljtsattacbn.supabase.co/storage/v1/object/sign/sahasra-hospital-images/Jyothi-Diagnosis/organs-images/human-leg-bone-image.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzYWhhc3JhLWhvc3BpdGFsLWltYWdlcy9KeW90aGktRGlhZ25vc2lzL29yZ2Fucy1pbWFnZXMvaHVtYW4tbGVnLWJvbmUtaW1hZ2Uud2VicCIsImlhdCI6MTczOTk2NjM5NCwiZXhwIjoxODk3NjQ2Mzk0fQ.7ZnDWjUNPe-OLQeM-CCV3tmxbZTZEe9RMeDSar72h00',
  },
  {
    name: 'Small Intestine',
    image: 'https://voaxktqgbljtsattacbn.supabase.co/storage/v1/object/sign/sahasra-hospital-images/Jyothi-Diagnosis/organs-images/human-small-intestine-image.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzYWhhc3JhLWhvc3BpdGFsLWltYWdlcy9KeW90aGktRGlhZ25vc2lzL29yZ2Fucy1pbWFnZXMvaHVtYW4tc21hbGwtaW50ZXN0aW5lLWltYWdlLndlYnAiLCJpYXQiOjE3Mzk5NjY1NDQsImV4cCI6MTg5NzY0NjU0NH0.bokOVqCfdG_v84b7Gk30F0GaJr00W-7U3gNhuiiZYN0',
  },
];

const OrganTests = () => {
  return (
    <section className="py-16 bg-[#e4deea]">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-12">
          <span className="text-3xl md:text-4xl font-bold text-blue-900">Get to the right tests by </span>
          <span className="text-3xl md:text-4xl font-bold text-red-500">Organs</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {organs.map((organ, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transform hover:scale-105 hover:bg-[#e3f3fb] transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 mb-4 rounded-full bg-gray-100 overflow-hidden">
                  <img
                    src={organ.image}
                    alt={organ.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-blue-900 text-center">
                  {organ.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="relative overflow-hidden group bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium px-10 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <span className="relative z-10 flex items-center justify-center">
              <span>View More</span>
              <svg
                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OrganTests;