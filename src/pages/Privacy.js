import React from 'react';
import './LegalPage.css';
import logo from '../assets/PDLANDINGLOGO.png';

function Privacy() {
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
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last Updated: November 21, 2024</p>

        <section className="legal-section">
          <h2>Introduction</h2>
          <p>
            PatrolDesk ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect information when you use our accident reporting application (the "App").
          </p>
        </section>

        <section className="legal-section">
          <h2>1. Information We Collect</h2>
          
          <h3>Information You Provide</h3>
          <p>The App collects information that you voluntarily provide during setup and use:</p>
          <ul>
            <li>Department information (name, address, phone numbers, email)</li>
            <li>Officer information (name, badge number)</li>
            <li>Accident case data (location, case number, vehicle information, operator information, insurance details)</li>
            <li>Accident photos taken within the App</li>
          </ul>

          <h3>Information Automatically Collected</h3>
          <p>The App may automatically collect:</p>
          <ul>
            <li>Device information (model, iOS version)</li>
            <li>App usage data for troubleshooting</li>
            <li>Crash logs and performance data</li>
          </ul>

          <h3>Permissions</h3>
          <p>The App requests access to:</p>
          <ul>
            <li><strong>Camera</strong> - for scanning VIN numbers, driver's licenses, and capturing insurance card images</li>
            <li><strong>Photo Library</strong> - to select insurance card images from your device</li>
          </ul>
          <p style={{ fontStyle: 'italic', fontSize: '14px', marginTop: '15px' }}>
            You may deny these permissions, but certain features may not function properly.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Data Storage & Retention</h2>
          
          <h3>Local Device Storage</h3>
          <p>All accident case data is stored locally on your device using iOS secure storage mechanisms. This includes:</p>
          <ul>
            <li>Department and officer information</li>
            <li>Accident case data and vehicle information</li>
            <li>Accident photos taken within the App</li>
            <li>Generated PDF reports</li>
          </ul>

          <h3>No Server Storage - Ephemeral Processing Only</h3>
          <p style={{ fontWeight: 'bold', marginBottom: '15px' }}>
            We do not store report data on our servers. All processing occurs locally on your device or via ephemeral API calls that do not retain data.
          </p>
          <p>
            Our application does not store, retain, or maintain any user-generated data, accident information, report content, or email records on our servers. All user inputs are processed exclusively through ephemeral API calls that exist only for the duration of the request and are not saved to any database, log file, or persistent storage controlled by us.
          </p>

          <h3>This means:</h3>
          <ul>
            <li>All accident case data, vehicle information, photos, and reports remain exclusively on your device</li>
            <li>No data is transmitted to or stored on our servers</li>
            <li>API calls (VIN decoding, email sending) are ephemeral - data is sent temporarily for processing and is not retained</li>
            <li>Third-party services (Resend, NHTSA) only receive data when you explicitly choose to use them, and they do not store data on our behalf</li>
            <li>You have complete control - all data can be deleted by uninstalling the App or deleting cases</li>
          </ul>

          <h3>Third-Party Email Service</h3>
          <p>
            All email delivery is handled by Resend, our third-party email service provider. Any logs, metadata, or copies of messages that may exist are maintained solely by Resend in accordance with their own retention policies and may be subject to requests made directly to them. We do not have access to or control over Resend's internal storage systems.
          </p>

          <h3>24-Hour Automatic Data Deletion</h3>
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

          <h3>Legal Requests & Subpoenas</h3>
          <p>
            As a result of our data storage practices and 24-hour automatic deletion policy, we do not possess any user 
            data that can be produced in response to a subpoena, court order, or law enforcement request. If we receive 
            a lawful request for information, we will formally respond that we do not store or retain any user data and 
            therefore have no records to produce. Additionally, the automatic deletion of case data after 24 hours means 
            that even locally stored data on your device is purged, further protecting you from potential legal discovery 
            requests that might otherwise target device-stored information.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and maintain the App's functionality</li>
            <li>Generate accident information exchange forms (PDF reports)</li>
            <li>Enable VIN decoding via the National Highway Traffic Safety Administration (NHTSA) API</li>
            <li>Send email reports via Resend API (only when you explicitly choose to send)</li>
            <li>Improve app performance and troubleshoot issues</li>
            <li>Ensure app security through PIN protection</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>4. Data Accuracy & User Responsibility</h2>
          <p style={{ fontWeight: 'bold', marginBottom: '15px' }}>
            You are solely responsible for ensuring that all data entered into PatrolDesk is accurate, complete, 
            and representative of the actual accident case.
          </p>
          <p>
            PatrolDesk is a documentation tool that facilitates the creation of accident reports. We are not 
            responsible for:
          </p>
          <ul>
            <li>The accuracy, completeness, or truthfulness of information entered by users</li>
            <li>Errors, omissions, or misrepresentations in accident reports</li>
            <li>The legal validity or admissibility of reports generated using the App</li>
            <li>Any consequences arising from inaccurate or incomplete data in reports</li>
            <li>Compliance with local, state, or federal reporting requirements</li>
          </ul>
          <p style={{ marginTop: '15px' }}>
            You must verify all information before submitting or distributing any reports. It is your responsibility 
            to ensure that all accident case data accurately reflects the actual incident and complies with your 
            department's policies and applicable laws.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Data Sharing & Third-Party Services</h2>
          <p>We do not sell, rent, or share your personal information or accident case data with third parties except:</p>
          <ul>
            <li>When you explicitly choose to send an email report via the App (data is sent to Resend API for email delivery only)</li>
            <li>When required by law or legal process</li>
            <li>To protect our rights or prevent illegal activity</li>
          </ul>
          <p style={{ fontWeight: 'bold', marginTop: '20px' }}>
            Accident case data is never shared with analytics services, advertising networks, or data brokers.
          </p>

          <h3>Third-Party Services</h3>
          <p>The App uses the following third-party services to provide functionality:</p>

          <div style={{ marginTop: '20px' }}>
            <h4 style={{ fontWeight: 'bold', marginBottom: '8px' }}>Resend API</h4>
            <p>
              Used to send accident information exchange forms via email when you explicitly choose to send them. Email content is transmitted to Resend for delivery only - this is an ephemeral API call. We do not store this data on our servers, and Resend's privacy practices are governed by their own privacy policy.
            </p>
          </div>

          <div style={{ marginTop: '20px' }}>
            <h4 style={{ fontWeight: 'bold', marginBottom: '8px' }}>NHTSA VIN Decoder API</h4>
            <p>
              Used to decode Vehicle Identification Numbers (VINs) to retrieve vehicle make, model, and year. Only the VIN is sent to NHTSA in an ephemeral API call - no data is stored on our servers, and no other case data is transmitted.
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
          <h2>6. Data Security</h2>
          <p>We implement security measures to protect your data:</p>
          <ul>
            <li>PIN-based app lock protection</li>
            <li>Local device encryption (iOS Keychain for sensitive data)</li>
            <li>Secure local storage using iOS UserDefaults and file system</li>
          </ul>
          <p style={{ fontStyle: 'italic', marginTop: '20px', fontSize: '14px' }}>
            However, no method of electronic storage or transmission is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Your Rights & Choices</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access all data stored locally on your device</li>
            <li>Delete accident cases and all associated data at any time</li>
            <li>Modify department and officer information in Settings</li>
            <li>Control camera and photo library permissions</li>
            <li>Uninstall the App to remove all local data</li>
          </ul>
          <p style={{ marginTop: '20px' }}>
            Since all data is stored locally on your device, you have full control over your information.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. Children's Privacy</h2>
          <p>
            The App is intended for use by law enforcement personnel only. It is not intended for children under the age of 13. We do not knowingly collect personal information from children.
          </p>
        </section>

        <section className="legal-section">
          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by updating the "Last Updated" date at the top of this policy. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </section>

        <section className="legal-section">
          <h2>10. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy or our data practices, please contact us at:</p>
          <ul className="contact-info">
            <li><strong>Email:</strong> support@patroldesk.com</li>
            <li><strong>Website:</strong> www.patroldesk.com</li>
          </ul>
        </section>

        <div style={{ 
          textAlign: 'center', 
          marginTop: '60px', 
          paddingTop: '30px', 
          borderTop: '1px solid rgba(255, 255, 255, 0.1)' 
        }}>
          <p style={{ 
            fontSize: '13px', 
            letterSpacing: '1.5px', 
            color: 'rgba(255, 255, 255, 0.6)',
            marginBottom: '8px'
          }}>
            PATROLDESK
          </p>
          <p style={{ 
            fontSize: '12px', 
            fontWeight: '600', 
            color: 'rgba(255, 255, 255, 0.6)'
          }}>
            Law Enforcement Use Only
          </p>
        </div>
      </div>
    </div>
  );
}

export default Privacy;

