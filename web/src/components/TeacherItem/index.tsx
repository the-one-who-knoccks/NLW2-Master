import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';
import api from '../../services/api';

export interface Teacher {
  id: number;
  avatar: string,
  bio: string,
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
};

 interface TeacherItemProps {
  teacherinfo: Teacher
}

const TeacherItem: React.FC<TeacherItemProps>= ({ teacherinfo }) => {

  function createNewConnection() {
    api.post('connections', {
      user_id: teacherinfo.id
    })
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacherinfo.avatar} alt={teacherinfo.avatar} />
        <div>
          <strong>{teacherinfo.name} </strong>
          <span>{teacherinfo.subject}</span>
        </div>
      </header>

      <p>{teacherinfo.bio}</p>

      <footer>
        <p>Preço/hora
              <strong>R$ {teacherinfo.cost}</strong>
        </p>
        <a onClick={createNewConnection} href={`https://wa.me/${teacherinfo.whatsapp}`} target="blank">
          <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </a>
      </footer>
    </article>
  )
}

export default TeacherItem;