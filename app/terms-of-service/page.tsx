type Props = {};

export const metadata = {
  title: 'Miso | Terms of Service',
};

function page({}: Props) {
  return (
    <section className="bg-light-color">
      <div className="pt-[40px] md:pt-[77px] mx-auto px-4 md:px-0 md:max-w-2xl lg:max-w-5xl xl:max-w-6xl border-b border-b-darker-color">
        <h1 className="tracking-wide text-3xl flex justify-center md:text-4xl lg:text-6xl text-center mb-16">
          Terms of Service for Miso - Beauty Clinic
        </h1>
        <p className="text-xl mb-12">
          These Terms of Service govern your use of the Miso - Beauty Clinic
          website and services. By using our website or services, you agree to
          be bound by these Terms of Service.
        </p>
        <h2 className="font-semibold text-xl mb-6">Description of Services</h2>
        <p className="text-xl mb-12">
          Miso - Beauty Clinic provides beauty and cosmetic services, including
          facials, hair removal, and makeup application. We may offer additional
          services from time to time, and these will be described on our
          website.
        </p>
        <h2 className="font-semibold text-xl mb-6">
          Payment and Cancellation Policy
        </h2>
        <p className="text-xl mb-4">
          We require payment for our services at the time they are rendered. We
          accept cash, credit cards, and other forms of payment as described on
          our website.
        </p>
        <p className="text-xl mb-12">
          If you need to cancel or reschedule an appointment, we require at
          least 24 hours' notice. If you cancel or reschedule with less than 24
          hours' notice, you may be subject to a cancellation fee as described
          on our website.
        </p>
        <h2 className="font-semibold text-xl mb-6">Intellectual Property</h2>
        <p className="text-xl mb-12">
          Our website and services contain proprietary information, including
          trademarks, copyrights, and other intellectual property. You may not
          copy, modify, or distribute our content without our prior written
          consent.
        </p>
        <h2 className="font-semibold text-xl mb-6">Disclaimer of Warranties</h2>
        <p className="text-xl mb-12">
          Our website and services are provided "as is" without any warranties,
          express or implied. We make no representations or warranties regarding
          the accuracy, completeness, or reliability of our website or services.
        </p>
        <h2 className="font-semibold text-xl mb-6">Limitation of Liability</h2>
        <p className="text-xl mb-12">
          In no event shall Miso - Beauty Clinic be liable for any indirect,
          incidental, special, or consequential damages arising out of or in
          connection with your use of our website or services.
        </p>
        <h2 className="font-semibold text-xl mb-6">Indemnification</h2>
        <p className="text-xl mb-12">
          You agree to indemnify and hold Miso - Beauty Clinic harmless from any
          claims, losses, or damages arising out of or in connection with your
          use of our website or services.
        </p>
        <h2 className="font-semibold text-xl mb-6">Termination</h2>
        <p className="text-xl mb-12">
          We may terminate or suspend your access to our website or services at
          any time, with or without cause, and with or without notice.
        </p>
        <h2 className="font-semibold text-xl mb-6">Governing Law</h2>
        <p className="text-xl mb-12">
          These Terms of Service are governed by the laws of the state or
          country where Miso - Beauty Clinic is located, without regard to its
          conflict of law provisions.
        </p>
        <h2 className="font-semibold text-xl mb-6">
          Changes to these Terms of Service
        </h2>
        <p className="text-xl mb-12">
          We may update these Terms of Service from time to time, and any
          changes will be posted on this page. Your continued use of our website
          or services after any such changes constitutes your acceptance of the
          new Terms of Service.
        </p>
        <h2 className="font-semibold text-xl mb-6">Contact Us</h2>
        <p className="text-xl mb-12">
          If you have any questions or concerns about our Terms of Service,
          please contact us at{' '}
          <span className="underline hover:text-darkred-color cursor-pointer">
            info@miso.com
          </span>
          .
        </p>
      </div>
    </section>
  );
}

export default page;
