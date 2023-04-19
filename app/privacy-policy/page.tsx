type Props = {};

export const metadata = {
  title: 'Miso | Privacy Policy',
};

function page({}: Props) {
  return (
    <section className="bg-light-color">
      <div className="pt-[40px] md:pt-[77px] mx-auto px-4 md:px-0 md:max-w-2xl lg:max-w-5xl xl:max-w-6xl border-b border-b-darker-color">
        <h1 className="tracking-wide text-3xl flex justify-center md:text-4xl lg:text-6xl text-center mb-16">
          Privacy Policy for Miso - Beauty Clinic
        </h1>
        <p className="text-xl mb-12">
          At Miso - Beauty Clinic, we value your privacy and are committed to
          protecting your personal information. This Privacy Policy explains how
          we collect, use, and share information when you visit our website or
          use our services.
        </p>
        <h2 className="font-semibold text-xl mb-6">Information We Collect</h2>
        <p className="text-xl mb-4">
          When you visit our website, we may collect certain information
          automatically, including your IP address, browser type, and operating
          system. We may also collect information about your activity on our
          website, such as the pages you visit and the links you click.
        </p>
        <p className="text-xl mb-12">
          If you contact us through our website, we may collect your name, email
          address, and any other information you provide to us.
        </p>
        <h2 className="font-semibold text-xl mb-6">
          How We Use Your Information
        </h2>
        <p className="text-xl mb-4">
          We may use the information we collect to improve our website and
          services, to communicate with you, and to personalize your experience
          on our website. We may also use your information to respond to your
          inquiries, to provide you with information about our services, and to
          send you marketing communications.
        </p>
        <p className="text-xl mb-12">
          We may share your information with third-party service providers who
          assist us with our operations, such as web hosting, analytics, and
          marketing. We may also share your information with law enforcement or
          other government authorities if required by law or to protect our
          legal rights.
        </p>
        <h2 className="font-semibold text-xl mb-6">Your Choices</h2>
        <p className="text-xl mb-12">
          You may choose not to provide us with certain information, but this
          may limit your ability to use our website or services. You may also
          opt out of receiving marketing communications from us by following the
          unsubscribe instructions in our emails.
        </p>
        <h2 className="font-semibold text-xl mb-6">Security</h2>
        <p className="text-xl mb-12">
          We take reasonable measures to protect your personal information from
          unauthorized access, use, or disclosure. However, no method of
          transmission over the internet or electronic storage is completely
          secure, so we cannot guarantee absolute security.
        </p>
        <h2 className="font-semibold text-xl mb-6">
          Changes to this Privacy Policy
        </h2>
        <p className="text-xl mb-12">
          We may update this Privacy Policy from time to time, and any changes
          will be posted on this page. Your continued use of our website or
          services after any such changes constitutes your acceptance of the new
          Privacy Policy.
        </p>
        <h2 className="font-semibold text-xl mb-6">Contact Us</h2>
        <p className="text-xl mb-12">
          If you have any questions or concerns about our Privacy Policy, please
          contact us at{' '}
          <span className="underline hover:text-darkred-color cursor-pointer">
            privacy@miso.com.
          </span>{' '}
        </p>
      </div>
    </section>
  );
}

export default page;
