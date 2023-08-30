import React from "react";
import { Col, Row } from "react-bootstrap";

const PrivacyPolicyPage = () => {
  return (
    <>
      <div className="main-container">
        <Row>
          <Col md={12}>
            <div className="container mt-5">
              <div className="title-head text-center">
                <h2>Privacy Policy and Terms & Conditions</h2>
              </div>
              <div className="sub-title text-center">
                <p>
                  Welcome to the Glory English High School App ("App"),
                  developed and provided by Glory English High School ("we,"
                  "our," or "us"). By using the App, you agree to comply with
                  the following Privacy Policy and Terms & Conditions. Please
                  read these documents carefully before using the App.
                </p>
              </div>
              <div className="pri-policy">
                <div className="policy-head mt-5 mb-4">
                  <h2>Privacy Policy:</h2>
                </div>
                <div className="policy-details">
                  <div className="policy mb-4">
                    <h3>Information We Collected:</h3>
                    <ul>
                      <li>
                        <span>Student Information:</span> We may collect
                        personal information such as student names, class
                        details, and attendance records when students and
                        parents use the App.
                      </li>
                      <li>
                        <span>Usage Information:</span> We may collect
                        information about how users interact with the App,
                        including homework submissions and notices viewed.
                      </li>
                      <li>
                        <span>Device Information:</span> We may collect
                        information about the devices used to access the App,
                        such as device type and operating system.
                      </li>
                    </ul>
                  </div>
                  <div className="policy mb-4">
                    <h3>How We Use Your Information:</h3>
                    <p>
                      We may use the information we collect for purposes
                      including:
                    </p>
                    <ul>
                      <li> Managing student attendance and assignments.</li>
                      <li>
                        Enhancing communication between school, teachers,
                        students, and parents.
                      </li>
                      <li>
                        Providing updates and important notices related to
                        school activities.
                      </li>
                    </ul>
                  </div>
                  <div className="policy mb-4">
                    <h3>Sharing of Your Information:</h3>
                    <p>We may share student information with:</p>
                    <ul>
                      <li>
                        School administrators and teachers for educational and
                        administrative purposes.
                      </li>
                      <li>
                        Third-party service providers who assist us in operating
                        and maintaining the App.
                      </li>
                      <li>
                        Legal authorities if required by law or to protect the
                        rights and safety of individuals.
                      </li>
                    </ul>
                  </div>
                  <div className="policy mb-4">
                    <h3>Security:</h3>
                    <p>
                      We implement appropriate security measures to protect
                      student information from unauthorized access or
                      disclosure.
                    </p>
                  </div>
                  <div className="policy mb-5">
                    <h3>Your Choices:</h3>
                    <p>
                      Parents and students can update account information and
                      communication preferences within the App.
                    </p>
                  </div>
                </div>
              </div>
              <div className="terms-conditions">
                <div className="terms-head mb-4">
                  <h2>Terms & Conditions:</h2>
                </div>
                <div className="terms mb-4">
                  <h3>Use of the App:</h3>
                  <ul>
                    <li>
                      <span>Eligibility:</span> Parents or legal guardians may
                      use the App on behalf of students enrolled at Glory
                      English High School.
                    </li>
                    <li>
                      <span>User Conduct:</span> Users agree to use the App in
                      accordance with school policies, applicable laws, and
                      regulations.
                    </li>
                    <li>
                      <span>Account Information:</span> Users are responsible for
                      maintaining the confidentiality of their account
                      credentials.
                    </li>
                  </ul>
                </div>
                <div className="terms mb-4">
                  <h3>Intellectual Property:</h3>
                  <ul>
                    <li>
                      <span>Ownership:</span> The App and its content are the
                      property of Glory English High School and are protected by
                      intellectual property laws.
                    </li>
                    <li>
                      <span>Restrictions:</span> Users may not reproduce,
                      distribute, modify, or create derivative works from the
                      App's content without our consent.
                    </li>
                  </ul>
                </div>
                <div className="terms mb-4">
                  <h3>Privacy:</h3>
                  <ul>
                    <li>
                      <span>Data Collection:</span> We collect and process
                      personal information as described in our Privacy Policy.
                      By using the App, you consent to the collection,
                      processing, and sharing of information as outlined in the
                      Privacy Policy.
                    </li>
                  </ul>
                </div>
                <div className="terms mb-4">
                  <h3>Disclaimer:</h3>
                  <ul>
                    <li>
                      <span>No Warranty:</span> The App is provided "as is" and
                      "as available" without any warranties of any kind, either
                      express or implied.
                    </li>
                    <li>
                      <span>Accuracy:</span> While we strive for accuracy, we do
                      not guarantee the accuracy, completeness, or reliability
                      of the information provided through the App.
                    </li>
                  </ul>
                </div>
                <div className="terms mb-4">
                  <h3>Limitation of Liability:</h3>
                  <ul>
                    <li>
                      <span>Exclusion of Liability:</span> Glory English High
                      School shall not be liable for any direct, indirect,
                      incidental, consequential, or special damages arising from
                      the use of the App.
                    </li>
                  </ul>
                </div>
                <div className="terms mb-4">
                  <h3>Termination:</h3>
                  <ul>
                    <li>
                      <span>Termination:</span> We reserve the right to terminate
                      or suspend access to the App for users who violate these
                      Terms or school policies.
                    </li>
                  </ul>
                </div>
                <div className="terms mb-4">
                  <h3>Changes to Terms:</h3>
                  <ul>
                    <li>
                      <span>Modification:</span> We may modify these Terms at
                      any time by posting the revised Terms on the App.
                    </li>
                  </ul>
                </div>
                <div className="terms mb-4">
                  <h3>Governing Law:</h3>
                  <ul>
                    <li>
                      <span>Jurisdiction:</span> These Terms are governed by the
                      laws of India. Any disputes shall be subject to the
                      exclusive jurisdiction of the courts in [Your City].
                    </li>
                  </ul>
                  <p>
                    If you have any questions about these documents, please
                    contact us at [school contact information].
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
