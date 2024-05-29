import logo from "./logo.svg";
import "./App.css";
import Section from "./components/Section";

function App() {
  const sections = [
    {
      topic: "Information We Collect",
      subSection: [
        {
          topic: "Personal Information",
          description:
            "We may collect personal information that you provide directly to us,such as your name, address, email address and phone number.",
        },
        {
          topic: "Usage Information",
          description:
            "We collect information about your use of the app, such as the pages you visit, the features you use, and the transactions you perform",
        },
        {
          topic: "Device Information",
          description: `We may collect information about the device you use to access our app, including the device model, operating system, unique device identifiers, and mobile network information.`,
        },
      ],
    },
    {
      topic: "Permissions We Request",
      subSection: [
        {
          topic: "Camera",
          description: `We require access to your device's camera to enable features such as scanning prescriptions or uploading images necessary for order processing. This access is only used for the intended purpose and will not be used without your explicit consent.`,
        },
        {
          topic: "Location",
          description: `We require access to your device's location to provide accurate delivery services. This helps us to determine your location for delivering your orders efficiently. We use this information only while the app is in use and do not store your location data beyond the scope of providing our services.`,
        },
        {
          topic: "Device Information",
          description: `We may collect information about the device you use to access our app, including the device model, operating system, unique device identifiers, and mobile network information.`,
        },
      ],
    },
    {
      topic: "Data Security",
      subSection: [
        {
          topic: "",
          description: `We take reasonable measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include encryption, access controls, and secure servers.`,
        },
      ],
    },
    {
      topic: "Your Rights",
      subSection: [
        {
          topic: "",
          description: `You have the right to access, update, or delete your personal information. If you wish to exercise these rights or have any questions about our privacy practices, please contact us at support@getmyrx.ca
          `,
        },
      ],
    },
    {
      topic: "Changes to This Privacy Policy",
      subSection: [
        {
          topic: "",
          description: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          `,
        },
      ],
    },
  ];
  return (
    <>
      <div className="sm:p-16 p-4">
        <div className="bg-[url('./assets/background4.jpeg')] bg-no-repeat bg-cover rounded-3xl backdrop-blur-sm">
          <div className="flex justify-center items-center flex-col py-20">
            <h1 className="text-3xl text-white  font-medium text-center">
              We care about your privacy
            </h1>
            <h1 className="text-gray-200 text-sm text-center sm:px-36 px-4 mt-4">
              Welcome to GetMyRx, a medical goods delivery application. Your
              privacy is important to us, and this Privacy Policy explains how
              we collect, use, and protect your personal information. By using
              our app, you consent to the practices described in this policy.
            </h1>
          </div>
        </div>
        {sections.map((section, index) => (
          <Section section={section} number={index} />
        ))}
      </div>
      <div className="flex h-16 w-full bg-sky-900 mt-8 justify-between items-center sm:px-32 px-10">
        <h1 className="font-medium text-2xl text-white">GetMyRx</h1>
        <h1 className="text-gray-500 text-sm">All right recieved</h1>
      </div>
    </>
  );
}

export default App;
