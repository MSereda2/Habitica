import React from 'react';
import { CompanyLabel } from '../../molecules/company-label/company-label.molecule';
import { NavLinks } from '../../molecules/nav-links/nav-links.molecule';
import { BalanceInfo } from '../../molecules/balance-info/balance-info.molecule';
import { ProfileInfo } from '../../molecules/profile-info/profile-info.molecule';

const AppBar = () => {
    return (
        <div>
            <CompanyLabel />
            <NavLinks />
            <BalanceInfo />
            <ProfileInfo />
        </div>
    )
}

export { AppBar };