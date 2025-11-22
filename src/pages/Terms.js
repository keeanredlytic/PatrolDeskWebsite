import React from 'react';
import './LegalPage.css';
import logo from '../assets/PDLANDINGLOGO.png';

function Terms() {
  const goHome = () => {
    window.history.pushState({}, '', '/');
    window.location.href = '/';
  };

  return (
    <div className="legal-page">
      <nav className="legal-nav">
        <div className="legal-nav-container">
          <div className="legal-nav-logo" onClick={goHome} style={{ cursor: 'pointer' }}>
            <img src={logo} alt="PatrolDesk Logo" className="logo-image" />
            <span>PatrolDesk</span>
          </div>
          <a href="/" className="back-home-link">← Back to Home</a>
        </div>
      </nav>
      <div className="legal-container">
        <h1>Terms of Service</h1>
        <p className="last-updated">Last Updated: November 21, 2024</p>

        <section className="legal-section">
          <h2>Introduction</h2>
          <p>
            These Terms of Service ("Terms") govern your access to and use of PatrolDesk ("we," "our," "us," or "the Service"), 
            our accident reporting application (the "App"). By accessing or using the App, you agree to be bound by these Terms. 
            If you do not agree to these Terms, do not use the App.
          </p>
        </section>

        <section className="legal-section">
          <h2>1. Eligibility</h2>
          <p>
            The App is intended for use by law enforcement personnel only. By using this Service, you represent and warrant that:
          </p>
          <ul>
            <li>You are a current law enforcement officer or authorized department personnel</li>
            <li>You have the authority to create and manage accident reports in your official capacity</li>
            <li>You are at least 18 years of age</li>
            <li>You have the legal capacity to enter into binding contracts</li>
            <li>You will use the App solely for official law enforcement purposes</li>
          </ul>
          <p style={{ marginTop: '15px' }}>
            The App is not intended for children under the age of 13. We do not knowingly allow children to use the App.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Account & Security</h2>
          <h3>PIN Protection</h3>
          <p>
            The App uses PIN-based authentication to protect your data. You are responsible for:
          </p>
          <ul>
            <li>Maintaining the confidentiality of your PIN</li>
            <li>All activities that occur under your account</li>
            <li>Notifying us immediately of any unauthorized access</li>
            <li>Ensuring your device is secure and password-protected</li>
          </ul>
          
          <h3>Device Security</h3>
          <p>
            Since all data is stored locally on your device, you are responsible for maintaining the security of your device. 
            We recommend using device passcodes, biometric authentication, and keeping your iOS software up to date.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. Acceptable Use</h2>
          <h3>Permitted Uses</h3>
          <p>You may use PatrolDesk solely for:</p>
          <ul>
            <li>Creating legitimate accident and incident reports in your official capacity</li>
            <li>Documenting motor vehicle accidents in your jurisdiction</li>
            <li>Generating accident information exchange forms (PDF reports)</li>
            <li>Official law enforcement duties</li>
          </ul>

          <h3>Prohibited Uses</h3>
          <p>You agree NOT to:</p>
          <ul>
            <li>Use the Service for personal, non-official purposes</li>
            <li>Share your PIN or device access with unauthorized individuals</li>
            <li>Create false, fraudulent, or misleading reports</li>
            <li>Reverse engineer, decompile, or disassemble the application</li>
            <li>Circumvent security features, PIN protection, or access restrictions</li>
            <li>Use the Service in any way that violates laws, regulations, or your department's policies</li>
            <li>Attempt to access data belonging to other users</li>
            <li>Use automated systems to interact with the App</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>4. Data Storage & Your Content</h2>
          <h3>Local Device Storage</h3>
          <p>
            All accident case data, including department information, officer information, vehicle details, 
            photos, and generated PDF reports, is stored locally on your device using iOS secure storage mechanisms. 
            We do not store, retain, or maintain any user-generated data on our servers.
          </p>

          <h3>No Server Storage</h3>
          <p style={{ fontWeight: 'bold', marginBottom: '15px' }}>
            Our application does not store, retain, or maintain any user-generated data, accident information, 
            report content, or email records on our servers.
          </p>
          <p>
            All processing occurs locally on your device or via ephemeral API calls that exist only for the 
            duration of the request and are not saved to any database, log file, or persistent storage controlled by us.
          </p>

          <h3>24-Hour Data Retention Policy</h3>
          <p style={{ fontWeight: 'bold', marginBottom: '15px', color: '#00C853' }}>
            To protect our users from legal discovery and subpoenas, case data is automatically deleted from your device 
            after 24 hours unless explicitly saved or exported by you.
          </p>
          <p>
            PatrolDesk implements an automatic data retention policy designed to protect law enforcement officers 
            from potential legal discovery requests and subpoenas. All accident case data stored locally on your device 
            is automatically purged after 24 hours from the time of case creation, unless you have:
          </p>
          <ul>
            <li>Exported the case as a PDF report and saved it to your device or cloud storage</li>
            <li>Manually saved or archived the case using the App's save functionality</li>
            <li>Sent the report via email (in which case a copy may exist in your sent emails)</li>
          </ul>
          <p style={{ marginTop: '15px' }}>
            This automatic deletion policy ensures that case data does not remain accessible on your device beyond 
            the immediate reporting period, thereby protecting you from potential legal discovery requests, subpoenas, 
            or court orders that might otherwise compel production of device-stored data. Once data is automatically 
            deleted after 24 hours, it cannot be recovered through the App.
          </p>
          <p style={{ fontStyle: 'italic', marginTop: '15px', fontSize: '14px' }}>
            <strong>Important:</strong> If you need to retain case information for longer than 24 hours, you must 
            export and save the PDF report to a secure location outside of the App before the automatic deletion occurs.
          </p>

          <h3>Your Content & Data Accuracy</h3>
          <p>
            You retain ownership of all content you create in PatrolDesk. You are solely responsible for the 
            accuracy, completeness, and legality of all information entered into the Service. PatrolDesk is a 
            documentation tool; the officer remains responsible for report content and must follow their 
            department's policies and procedures.
          </p>

          <h3>Data Accuracy & User Responsibility</h3>
          <p style={{ fontWeight: 'bold', marginBottom: '15px' }}>
            You are solely responsible for ensuring that all data entered into PatrolDesk is accurate, complete, 
            and representative of the actual accident case.
          </p>
          <p>
            PatrolDesk is not responsible for:
          </p>
          <ul>
            <li>The accuracy, completeness, or truthfulness of information entered by users</li>
            <li>Errors, omissions, or misrepresentations in accident reports</li>
            <li>The legal validity or admissibility of reports generated using the App</li>
            <li>Any consequences arising from inaccurate or incomplete data in reports</li>
            <li>Compliance with local, state, or federal reporting requirements</li>
            <li>Any legal, financial, or professional consequences resulting from inaccurate reports</li>
          </ul>
          <p style={{ marginTop: '15px' }}>
            You must verify all information before submitting or distributing any reports. It is your responsibility 
            to ensure that all accident case data accurately reflects the actual incident and complies with your 
            department's policies and applicable laws. PatrolDesk provides the tools for documentation but does not 
            validate, verify, or guarantee the accuracy of user-entered data.
          </p>

          <h3>Data Control</h3>
          <p>
            Since all data is stored locally on your device, you have complete control. You can:
          </p>
          <ul>
            <li>Delete accident cases and all associated data at any time</li>
            <li>Modify department and officer information in Settings</li>
            <li>Uninstall the App to remove all local data</li>
            <li>Export or save reports before deletion if needed</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>5. Third-Party Services</h2>
          <p>
            The App uses the following third-party services to provide functionality. These services operate 
            independently and have their own terms and privacy policies:
          </p>

          <div style={{ marginTop: '20px' }}>
            <h4 style={{ fontWeight: 'bold', marginBottom: '8px' }}>Resend API</h4>
            <p>
              Used to send accident information exchange forms via email when you explicitly choose to send them. 
              Email content is transmitted to Resend for delivery only - this is an ephemeral API call. We do not 
              store this data on our servers, and Resend's privacy practices are governed by their own privacy policy.
            </p>
          </div>

          <div style={{ marginTop: '20px' }}>
            <h4 style={{ fontWeight: 'bold', marginBottom: '8px' }}>NHTSA VIN Decoder API</h4>
            <p>
              Used to decode Vehicle Identification Numbers (VINs) to retrieve vehicle make, model, and year. 
              Only the VIN is sent to NHTSA in an ephemeral API call - no data is stored on our servers, and 
              no other case data is transmitted.
            </p>
          </div>

          <div style={{ marginTop: '20px' }}>
            <h4 style={{ fontWeight: 'bold', marginBottom: '8px' }}>Apple CloudKit</h4>
            <p>
              Used for PIN reset verification only. No accident case data is stored in CloudKit.
            </p>
          </div>
        </section>

        <section className="legal-section">
          <h2>6. Intellectual Property</h2>
          <p>
            PatrolDesk and all related content, features, and functionality are owned by PatrolDesk and are 
            protected by copyright, trademark, and other intellectual property laws. You may not:
          </p>
          <ul>
            <li>Copy, modify, or distribute the application</li>
            <li>Create derivative works</li>
            <li>Reverse engineer, decompile, or disassemble the App</li>
            <li>Remove proprietary notices or copyright information</li>
            <li>Use our trademarks, logos, or branding without permission</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>7. Service Availability</h2>
          <p>
            Since PatrolDesk operates primarily as a local application with minimal server dependencies, 
            the App functions offline. However, certain features (VIN decoding, email sending) require 
            internet connectivity. We strive to provide reliable service but cannot guarantee:
          </p>
          <ul>
            <li>Uninterrupted access to third-party API services</li>
            <li>Continuous internet connectivity</li>
            <li>Availability of all features at all times</li>
          </ul>
          <p style={{ marginTop: '15px' }}>
            We may temporarily suspend or modify features for maintenance or updates. We are not liable 
            for any service interruptions, data loss, or inability to access third-party services.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. Disclaimers and Limitations of Liability</h2>
          <h3>Service "As Is"</h3>
          <p>
            PatrolDesk is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, express or implied, 
            including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
          </p>

          <h3>No Legal Advice</h3>
          <p>
            PatrolDesk is a documentation tool only. It does not provide legal advice, and the information 
            generated does not constitute legal documentation unless validated by your department's procedures. 
            Users should follow their department's policies and procedures for accident reporting.
          </p>

          <h3>Limitation of Liability</h3>
          <p>
            To the maximum extent permitted by law, PatrolDesk shall not be liable for any indirect, incidental, 
            special, consequential, or punitive damages, including but not limited to loss of data, revenue, or use. 
            Since all data is stored locally on your device, we are not responsible for data loss due to device 
            failure, loss, theft, or damage.
          </p>
          <p style={{ fontStyle: 'italic', marginTop: '15px', fontSize: '14px' }}>
            However, no method of electronic storage or transmission is 100% secure. While we strive to protect 
            your data through local encryption and secure storage, we cannot guarantee absolute security.
          </p>
        </section>

        <section className="legal-section">
          <h2>9. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless PatrolDesk, its officers, employees, and agents from any 
            claims, losses, damages, liabilities, and expenses arising from:
          </p>
          <ul>
            <li>Your use of the Service</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any laws, regulations, or department policies</li>
            <li>Content you create, including the accuracy and legality of accident reports</li>
            <li>Any misuse of the App or unauthorized access to your device</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>10. Termination</h2>
          <p>
            Since all data is stored locally on your device, you may stop using the App at any time by uninstalling it. 
            Uninstalling the App will delete all local data.
          </p>
          <p style={{ marginTop: '15px' }}>
            We reserve the right to discontinue the App or modify its functionality at any time. However, since 
            the App operates primarily offline, existing installations will continue to function for local data 
            management, though certain features requiring third-party services may become unavailable.
          </p>
        </section>

        <section className="legal-section">
          <h2>11. Changes to These Terms</h2>
          <p>
            We may update these Terms of Service from time to time. We will notify you of any changes by updating 
            the "Last Updated" date at the top of these Terms. You are advised to review these Terms periodically 
            for any changes. Continued use of the App after changes constitutes acceptance of the modified Terms.
          </p>
        </section>

        <section className="legal-section">
          <h2>12. Contact Us</h2>
          <p>If you have any questions about these Terms of Service, please contact us at:</p>
          <ul className="contact-info">
            <li><strong>Email:</strong> support@patroldesk.com</li>
            <li><strong>Website:</strong> www.patroldesk.com</li>
          </ul>
        </section>

        <div style={{ 
          textAlign: 'center', 
          marginTop: '60px', 
          paddingTop: '30px', 
          borderTop: '1px solid rgba(0, 0, 0, 0.1)' 
        }}>
          <p style={{ 
            fontSize: '13px', 
            letterSpacing: '1.5px', 
            color: 'rgba(0, 0, 0, 0.6)',
            marginBottom: '8px'
          }}>
            PATROLDESK
          </p>
          <p style={{ 
            fontSize: '12px', 
            fontWeight: '600', 
            color: 'rgba(0, 0, 0, 0.6)'
          }}>
            Law Enforcement Use Only
          </p>
        </div>
      </div>
    </div>
  );
}

export default Terms;

