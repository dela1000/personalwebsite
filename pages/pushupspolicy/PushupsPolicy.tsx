import { useAppContext } from 'contexts/context';
import { UseAppContext } from 'types/types';

export default function PushupsPolicy() {
  const {
    sharedState: { windowType, themeName = 'dark' },
  }: UseAppContext = useAppContext();
  return (
    <div className={`${themeName === 'dark' ? 'dark-header' : 'light-header'}  fade-in`}>
      <div className="max-w-3xl mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-4xl font-bold mb-6">Daily Pushups Privacy Policy</h1>

        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p className="mb-4 leading-relaxed">
          Daily Pushups ("the App") is a fitness application designed to help you build strength
          through daily pushup routines. This Privacy Policy explains what data we collect, how we
          use it, and how we protect your information when you use our App or website. By using
          Daily Pushups, you agree to the practices outlined in this policy.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>

        <h3 className="text-xl font-medium mt-4 mb-1">Push Notification Tokens</h3>
        <p className="mb-4">
          If you enable reminders, we may collect a device push notification token. This token is
          used exclusively to send notifications at times you select. It does not personally
          identify you.
        </p>

        <h3 className="text-xl font-medium mt-4 mb-1">Local App Data</h3>
        <p className="mb-4">
          We store your workout progress, reminder settings, and user preferences locally on your
          device. This information is not transmitted to our servers and remains under your control.
        </p>

        <h2 className="text-2xl font-semibold mb-2">How We Use Your Information</h2>
        <p className="mb-4">We use your information solely to:</p>
        <ul className="list-disc ml-6 mb-4 space-y-1">
          <li>Display your workout progress</li>
          <li>Send notifications at times you choose</li>
          <li>Improve the App’s performance and user experience</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Third-Party Services</h2>
        <p className="mb-4">
          Daily Pushups may use platform services such as Firebase Cloud Messaging (FCM), Google
          Play Services, or Apple Push Notification Service (APNs) to deliver notifications. These
          services may collect device-related data necessary to send notifications.
        </p>
        <p className="mb-4">We do not share or sell your personal information to third parties.</p>

        <h2 className="text-2xl font-semibold mb-2">Data Security</h2>
        <p className="mb-4">
          All stored data remains on your device. Daily Pushups does not run a backend server and
          does not store your personal information externally. Your device’s security settings
          control how your data is protected.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Children’s Privacy</h2>
        <p className="mb-4">
          Daily Pushups is not intended for children under 13, and we do not knowingly collect
          personal information from children.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Your Choices</h2>
        <p className="mb-2">You may choose to:</p>
        <ul className="list-disc ml-6 mb-4 space-y-1">
          <li>Disable notifications through your device settings</li>
          <li>Clear app data at any time</li>
          <li>Uninstall the app to remove all locally stored information</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Changes to This Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Any changes will be posted on this
          page and become effective immediately upon posting.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p className="mb-4">
          If you have questions about this Privacy Policy or your data, contact us at: <br />
          <span className="font-medium">support@dailypushups.app</span>
        </p>
      </div>
    </div>
  );
}
