

const img01 =
  "https://bzr-furniro.s3.us-east-2.amazonaws.com/Annibale+Colombo+Bed/1.png";
const img02 =
  "https://bzr-furniro.s3.us-east-2.amazonaws.com/Annibale+Colombo+Bed/2.png";
const DescriptionSection = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 w-full">
      <div className="flex justify-center space-x-8 border-b-2 border-gray-200 pb-4">
        <button className="font-semibold text-black">Description</button>
        <button className="text-gray-500">Additional Information</button>
      </div>
      <div className="mt-6 text-center">
        <p className="text-gray-700 mb-4">
          Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p className="text-gray-700 mb-8">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </p>
        <div className="flex justify-center space-x-4">
          <img
            src={img01}
            alt="Sofa 1"
            className="rounded-lg shadow-md h-[348px] w-[605px] bg-[#F9F1E7]"
          />
          <img
            src={img02}
            alt="Sofa 2"
            className="rounded-lg shadow-md h-[348px] w-[605px] bg-[#F9F1E7]"
          />
        </div>
      </div>
    </div>
  );
};

export default DescriptionSection;
