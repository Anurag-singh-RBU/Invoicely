import * as React from 'react';
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Button,
  Hr,
  Tailwind,
} from '@react-email/components';

interface ForgotPasswordEmailProps{

    username: string;
    userEmail: string;
    resetUrl: string;
    companyName: string;

}

const ForgotPasswordEmail = (props: ForgotPasswordEmailProps) => {

  const { username , userEmail , resetUrl , companyName} = props;

  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head>
        </Head>
        <Body className="bg-slate-50 geist-sans py-10">
          <Container className="bg-white sm:max-w-[580px] w-full mx-auto rounded-[12px] shadow-lg border border-slate-200">

            <Section className="px-14 pt-14 pb-10 text-center">
              <Text className="sm:text-[28px] text-[35px] font-bold tracking-wider whitespace-nowrap font-mono text-slate-900 m-0 mb-2">
                Password Reset Request
              </Text>
              <Text className="sm:text-[16px] text-[25px] text-slate-600 font-normal m-0">
                Secure access to your {companyName} account
              </Text>
            </Section>
            <Section className="px-14 pb-12">
              <Text className="text-[16px] text-slate-800 font-medium leading-6 mb-6">
                Hello {username},
              </Text>
              
              <Text className="text-[16px] text-slate-700 font-normal leading-[26px] mb-6">
                We received a request to reset the password for your account registered with <span className="font-medium text-slate-900">{userEmail}</span>.
              </Text>
              
              <Text className="text-[16px] text-slate-700 font-normal leading-[26px] mb-9">
                To proceed with resetting your password, please click the secure button below. This link is valid for 24 hours and can only be used once.
              </Text>

              <Section className="text-center mb-10">
                <Button
                  href={resetUrl}
                  className="bg-blue-700 hover:bg-blue-500 text-white px-10 shadow-md py-[18px] rounded-xl text-[16px] font-medium no-underline box-border inline-block tracking-wide transition-colors font-mono">
                  Reset My Password
                </Button>

              </Section>

              <Section className="bg-slate-50 rounded-xl p-6 mb-8">
                <Text className="text-[14px] text-slate-600 font-normal leading-5 m-0 mb-3 font-mono">
                  <strong>Alternative method :</strong>
                </Text>
                <Text className="text-[14px] text-slate-600 font-normal leading-5 m-0 mb-2">
                  If the button doesn&apos;t work , copy and paste this secure link :
                </Text>
                <Text className="text-[13px] text-blue-600 font-mono break-all m-0 bg-white p-3 rounded-lg border border-slate-200">
                  {resetUrl}
                </Text>
              </Section>

              <Hr className="border-slate-200 my-8" />

              <Section className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-[6px] mb-6">
                <Text className="text-[14px] text-amber-800 font-medium leading-5 m-0 mb-2">
                  Security Notice
                </Text>
                <Text className="text-[14px] text-amber-700 font-normal leading-5 m-0">
                  If you didn&apos;t request this password reset, please ignore this email or contact our support team immediately. Your account remains secure.
                </Text>
              </Section>
              
              <Text className="text-[14px] text-slate-600 font-normal leading-[22px] text-center">
                This secure link expires in <strong>24 hours</strong> for your protection.
              </Text>
            </Section>

            <Section className="px-14 pb-12 pt-8 border-t border-slate-100">
              <Text className="text-[13px] text-slate-500 text-center font-normalfont-mono leading-[18px] m-0 mb-3">
                Best regards,<br />
                The {companyName} Security Team
              </Text>
              <Hr className="border-slate-200 my-5" />
              <Text className="text-[12px] text-slate-400 text-center font-normal leading-4 m-0 mb-1.5 whitespace-nowrap">
                {companyName} | Anurag Singh and Anshuman Tiwari
              </Text>
              <Text className="text-[12px] text-slate-400 text-center font-normal leading-4 m-0 mb-3">
                Nagpur , Maharashtra , India
              </Text>
              <Text className="text-[12px] text-slate-400 text-center font-normal leading-4 m-0">
                <a href="#" className="text-slate-400 no-underline hover:text-slate-600">Privacy Policy</a> • 
                <a href="#" className="text-slate-400 no-underline hover:text-slate-600"> Unsubscribe</a> • 
                © 2025 {companyName}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ForgotPasswordEmail;