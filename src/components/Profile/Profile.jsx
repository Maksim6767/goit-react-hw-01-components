import PropTypes from 'prop-types';
import {
  ProfileWrap,
  ProfileNameWrap,
  ProfileImg,
  ProfileText,
  ProfileListStat,
  ProfileItems,
  StatName,
  StatQuantity,
} from './Profile.styled';

export default function Profile ({ username, tag, location, avatar, stats }) {
    return (
        < ProfileWrap>
            
            <ProfileNameWrap>
                <ProfileImg src={avatar} alt={username} />
                <ProfileText>@{tag}</ProfileText>
                <ProfileText>{location}</ProfileText>
            </ProfileNameWrap>

            <ProfileListStat>
                <ProfileItems>
                    <StatName>Followers</StatName>
                    <StatQuantity>{stats.followers}</StatQuantity>
                </ProfileItems>

                <ProfileItems>
                    <StatName>Views</StatName>
                    <StatQuantity>{stats.views}</StatQuantity>
                </ProfileItems>

                <ProfileItems>
                    <StatName>Likes</StatName>
                    <StatQuantity>{stats.likes}</StatQuantity>
                </ProfileItems>
            </ProfileListStat>

        </ProfileWrap>
    );
}