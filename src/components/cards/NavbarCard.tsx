import { Card, Flex, Overlay, Space } from '@mantine/core';
import { AccountsButton } from "../buttons/AccountsButton";
import { DashboardButton } from "../buttons/DashboardButton";
import { SecurityButton } from "../buttons/SecurityButton";
import { SettingsButton } from "../buttons/SettingsButton";
import { SurgiWikiButton } from "../buttons/SurgiWikiButton";
import { SupportButton } from "../buttons/SupportButton";
import { ProfileButton } from "../buttons/ProfileButton";
import { LogsAndActivityButton } from "../buttons/LogsAndActivityButton";
import { UpdatesButton } from "../buttons/UpdatesButton";
import classes from './NavbarCard.module.css';

export function NavbarCard() {
  return (
		<Card className={classes.NavbarCard} shadow="lg" padding="sm" radius="lg" withBorder>
			<Flex
				mih={600}
				gap="sm"
				rowGap="8"
				//columnGap="10"
				justify="center"
				align="center"
				direction="column"
				wrap="wrap"
				>
					<Space/>
						<DashboardButton/>
					<Space/>
						<AccountsButton/>
					<Space/>
						<SecurityButton/>
					<Space/>
						<SupportButton/>
					<Space/>
						<ProfileButton/>
					<Space/>
						<LogsAndActivityButton/>
					<Space/>
						<UpdatesButton/>
					<Space/>
						<AccountsButton/>
					<Space/>
						<SurgiWikiButton/>
					<Space/>
						<SettingsButton/>
					<Space />
			</Flex>
		</Card>
  );
}