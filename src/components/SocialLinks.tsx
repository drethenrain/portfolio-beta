import { SiDiscord, SiGithub, SiSteam } from 'react-icons/si';

export default function SocialLinks() {
  return (
    <div className="mt-10">
      <ul className="flex justify-center items-center space-x-4">
        <li>
          <a href="https://github.com/drethenrain">
            <SiGithub size={36} />
          </a>
        </li>
        <li>
          <a href="https://discordapp.com/users/557216693676408832">
            <SiDiscord size={36} />
          </a>
        </li>
        <li>
          <a href="https://steamcommunity.com/id/drethenrain">
            <SiSteam size={36} />
          </a>
        </li>
      </ul>
    </div>
  );
}
