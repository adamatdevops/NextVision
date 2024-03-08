// @ts-check
/* eslint-disable no-tabs */

import { useState } from "react";
import { UnstyledButton, Tooltip, Title, rem } from "@mantine/core";
import { AiOutlineHome } from "react-icons/ai";
import { LuGaugeCircle } from "react-icons/lu";
import { TbDeviceAnalytics, TbCalendarStats, TbUserCircle, TbFingerprint, TbSettings } from "react-icons/tb";

import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./DoubleNavbar.module.css";

const mainLinksMockdata = [
  { icon: AiOutlineHome, label: "Home" },
  { icon: LuGaugeCircle, label: "Dashboard" },
  { icon: TbDeviceAnalytics, label: "Analytics" },
  { icon: TbCalendarStats, label: "Releases" },
  { icon: TbUserCircle, label: "Account" },
  { icon: TbFingerprint, label: "Security" },
  { icon: TbSettings, label: "Settings" },
];

const linksMockdata = [
  "Security",
  "Settings",
  "Dashboard",
  "Releases",
  "Account",
  "Orders",
  "Clients",
  "Databases",
  "Pull Requests",
  "Open Issues",
  "Wiki pages",
];

export default function DoubleNavbar() {
  const [active, setActive] = useState("Releases");
  const [activeLink, setActiveLink] = useState("Settings");

  const mainLinks = mainLinksMockdata.map((link) => (
    <Tooltip
			label={link.label}
			position="right"
			withArrow
			transitionProps={{ duration: 0 }}
			key={link.label}
		>
    	<UnstyledButton
        onClick={() => setActive(link.label)}
        className={classes.mainLink}
        data-active={link.label === active || undefined}
      >
        <link.icon style={{ width: rem(22), height: rem(22) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  ));

  const links = linksMockdata.map((link) => (
    <a
      className={classes.link}
      data-active={activeLink === link || undefined}
      href="#"
      onClick={(event) => {
				event.preventDefault();
				setActiveLink(link);
      }}
      key={link}
    >
      {link}
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.wrapper}>
        <div className={classes.aside}>
          <div className={classes.logo}>
            <MantineLogo type="mark" size={30} />
          </div>
          {mainLinks}
        </div>
        <div className={classes.main}>
          <Title order={4} className={classes.title}>
            {active}
          </Title>

          {links}
        </div>
      </div>
    </nav>
  );
}
