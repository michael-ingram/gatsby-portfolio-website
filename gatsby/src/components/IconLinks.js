import React from 'react';

import { FaGithubSquare } from '@react-icons/all-files/fa/FaGithubSquare';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { FaListAlt } from '@react-icons/all-files/fa/FaListAlt';
import IconLinkStyles from '../styles/IconLinkStyles';

export default function IconLinks() {
  return (
    <IconLinkStyles>
      <a href='https://github.com/michael-ingram'>
        <FaGithubSquare className='icon github' />
      </a>
      <a href='https://www.linkedin.com/in/michael-ingram-150a37177/'>
        <FaLinkedin className='icon linkedin'/>
      </a>
      <a href=''>
        <FaListAlt className='icon resume'/>
      </a>
    </IconLinkStyles>
  );
}