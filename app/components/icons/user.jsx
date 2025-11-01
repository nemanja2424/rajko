"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

export default function UserIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 512 512">
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d4af37" />
          <stop offset="50%" stopColor="#f5d76e" />
          <stop offset="100%" stopColor="#b8860b" />
        </linearGradient>
      </defs>
      <FontAwesomeIcon
        icon={faUser}
        style={{ fill: 'url(#goldGradient)', width: '40px', height: '40px' }}
      />
    </svg>
  );
}
