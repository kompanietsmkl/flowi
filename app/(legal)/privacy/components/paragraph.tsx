import Link from "next/link";

const Paragraph = () => {
    return ( 
        <div className="text-lg pt-10 text-justify space-y-6">
            <div>
                <h3 className="text-lg font-semibold">1. Introduction</h3>
                <p>Flowi (&quot;we,&quot; &quot;our&quot; or &quot;us&quot;) is committed to protecting your privacy. <br /><br />
                     This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
                    you use our productivity web application (&quot;Flowi&quot; or &quot;the App&quot;). By accessing or using Flowi,
                    you agree to the terms and conditions of this Privacy Policy.
                </p>
            </div>
            <div>
                <h3 className="text-lg font-semibold">2. Information We Collect</h3>
                <p>
                    Personal Information: When you register for an account, we may collect personal information such as your name, email address, and other contact details.
                    <br /><br />Usage Data: We collect information about your interactions with Flowi, including the features you use, the actions you take, and the time, frequency, and duration of your activities.
                    <br /><br />Device Information: We collect information about the device you use to access Flowi, including hardware model, operating system and version, unique device identifiers, and network information.
                    <br /><br />Cookies and Tracking Technologies: We use cookies and similar tracking technologies to track activity on Flowi and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
                </p>
            </div>
            <div>
                <h3 className="text-lg font-semibold">3. Use of Information</h3>
                <p>
                    To Provide and Maintain Flowi: We use your information to operate, maintain, and provide you with the features and functionality of Flowi.
                    <br /><br />To Improve Our Services: We use the information to understand and analyze usage trends and preferences, improve Flowi, and develop new products, services, features, and functionality.
                    <br /><br />To Communicate with You: We may use your information to communicate with you, including sending service-related announcements, updates, and administrative messages.
                    <br /><br />For Security and Legal Purposes: We may use your information to protect, investigate, and deter against fraudulent, unauthorized, or illegal activity.
                </p>
            </div>
            <div>
                <h3 className="text-lg font-semibold">4. Sharing of Information</h3>
                <p>
                    Third-Party Service Providers: We may share your information with third-party service providers that perform services on our behalf, such as hosting services, email delivery, and customer service.
                    <br /><br />Compliance with Laws: We may disclose your information where we are legally required to do so to comply with applicable law, government requests, judicial proceedings, court orders, or legal process.
                    <br /><br />Business Transfers: In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of the transaction.
                </p>
            </div>
            <div>
                <h3 className="text-lg font-semibold">5. Your Rights</h3>
                <p>
                    Account Information: You may update, correct, or delete your account information at any time by logging into your account settings.
                    <br /><br />Cookies: Most web browsers are set to accept cookies by default. You can choose to set your browser to remove or reject cookies, but this could affect the availability and functionality of Flowi.
                    <br /><br />Data Retention: We will retain your information for as long as your account is active or as needed to provide you with Flowi. We will also retain and use your information to comply with our legal obligations, resolve disputes, and enforce our agreements.
                </p>
            </div>
            <div>
                <h3 className="text-lg font-semibold">6. Security</h3>
                <p>
                    We use administrative, technical, and physical security measures to help protect your personal information. 
                    <br /><br />While we have taken reasonable steps to secure the personal information you provide to us, 
                    please be aware that no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                </p>
            </div> 
            <div>
                <h3 className="text-lg font-semibold">7. Changes to This Privacy Policy</h3>
                <p>
                    We may update this Privacy Policy from time to time in order to reflect changes to our practices or 
                    for other operational, legal, or regulatory reasons. <br /><br /> We will notify you of any changes by 
                    posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
                </p>
            </div>
            <div>
                <h3 className="text-lg font-semibold">8. Contact Us</h3>
                <p>
                    If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
                    <br /><br />Email: 
                    <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley@flowi.com" 
                    className="underline text-blue-400">support@flowi.com</Link>
                    
                </p>
            </div>
            <p className="italic">By using Flowi, you acknowledge that you have read and understood this Privacy Policy
                and agree to our collection, use, and disclosure practices as described
            </p>  
        </div>
        
     );
}
 
export default Paragraph;