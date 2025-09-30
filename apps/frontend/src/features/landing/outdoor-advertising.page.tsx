import { Advantages } from "./ui/common/advantages";
import { ContactUs } from "./ui/common/contact-us";
import { OutdoorAdsHero } from "./ui/outdoor-ads/hero";
import { Services } from "./ui/outdoor-ads/services";
import { Steps } from "./ui/outdoor-ads/steps";

export function OutdoorAdvertisingPage() {
  return (
    <>
      <OutdoorAdsHero />
      <Advantages />
      <Services />
      <Steps />
      <ContactUs />
    </>
  );
}
