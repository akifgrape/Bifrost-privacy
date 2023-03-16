import { Link, Text } from 'theme-ui'
import Page from '../../Components/Page'
import InfoItem from './InfoItem'

interface SettingsPageProps {
  tab: string
}

const SettingsPage = ({ tab }: SettingsPageProps) => {
  return (
    <Page isCurrentTab={tab === 'settings'} title={'Info'}>
      <InfoItem title={'Hide Debugging Notification Bar'}>
        While spoofing data a notification bar becomes visible. Hiding the bar
        can be done by using the{' '}
        <Text sx={{ fontStyle: 'italic', mr: '2px' }}>
          --silent-debugger-extension-api
        </Text>{' '}
        flag.{' '}
        <Link
          variant="hover"
          href={`https://www.chromium.org/developers/how-tos/run-chromium-with-flags`}
          target="_blank"
        >
          Instructions on how to run chrome with flags
        </Link>
        .
      </InfoItem>
      <InfoItem title={'Change IP Address'}>
        Bifrost does not change your IP address. To change your IP address you
        will need a VPN or proxy.
      </InfoItem>
      {/* <InfoItem title={'Bifrost vs Similar Extensions'}>
        Bifrost utilizes the debugger API to spoof data which is completely
        undetectable. Other similar extensions rely on{' '}
        <Link
          variant="hover"
          href={`https://palant.info/2020/12/10/how-anti-fingerprinting-extensions-tend-to-make-fingerprinting-easier/`}
          target="_blank"
        >
          inferior script tag injections
        </Link>
        .
      </InfoItem> */}
      <InfoItem title={'Test Extension'}>
        You can test and compare Bifrost and other spoofing extensions on{' '}
        <Link variant="hover" href={`https://eighred.com/#/scan`} target="_blank">
          eighred.com
        </Link>
        .
      </InfoItem>
      <InfoItem title={'Support Us'}>
        If you like this extension and wish to support us you can{' '}
        <Link
          variant="hover"
          href={`https://chrome.google.com/webstore/detail/Bifrost-spoof-timezone-loca/ncbknoohfjmcfneopnfkapmkblaenokb?utm_source=rate`}
          target="_blank"
        >
          rate the extension
        </Link>{' '}
        or{' '}
        <Link
          variant="hover"
          href={`https://eighred.com/#/donate`}
          target="_blank"
        >
          donate
        </Link>
        .
      </InfoItem>
    </Page>
  )
}

export default SettingsPage
