import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { uuid } from 'uuidv4';
import { AuthContext } from '../../contexts/AuthContext';

const CurrentProjects = () => {
  const { toggleLogin } = useContext(AuthContext);
  const [deleteProjectModalState, setDeleteProjectModalState] = useState(false);
  const [editProjectModalState, setEditProjectModalState] = useState(false);
  const [projects, setProjects] = useState([]);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [formName, setFormName] = useState('');
  const [formLink, setFormLink] = useState('');
  const [formImage, setFormImage] = useState('');

  const selectedProject = projects[selectedProjectIndex];

  useEffect(() => {
    axios
      .get('/api/projects/findAll')
      .then(({ data }) => setProjects(data))
      .catch(err => console.log(err));
  }, []);

  const deleteProject = () => {
    axios
      .post('/api/projects/delete', { id: selectedProject._id })
      .then(({ data }) => {
        setDeleteProjectModalState(false);
        setProjects(data);
      })
      .catch(err => console.log(err));
  };

  const handleEditProjectClick = (project, i) => {
    if (!isNaN(i)) {
      setSelectedProjectIndex(i);
    }
    setEditProjectModalState(true);
  };

  const handleDeleteProjectClick = (project, i) => {
    setSelectedProjectIndex(i);
    setDeleteProjectModalState(true);
  };

  const saveProject = e => {
    e.preventDefault();
    const selectedProject = projects[selectedProjectIndex];
    if (
      !selectedProject &&
      !formName.length &&
      !formLink.length &&
      !formImage.length
    ) {
      alert('fill out all fields please');
      return;
    }
    const name = formName.length > 0 ? formName : selectedProject.name;
    const link = formLink.length > 0 ? formLink : selectedProject.link;
    const image = formImage.length > 0 ? formImage : selectedProject.image;
    const id = selectedProject ? projects[selectedProjectIndex]._id : false;

    const updatedProject = { name, link, image, id };
    axios
      .post('/api/projects/save', updatedProject)
      .then(({ data }) => {
        setEditProjectModalState(false);
        setProjects(data);
        setFormName('');
        setFormLink('');
        setFormImage('');
      })
      .catch(err => console.log(err));
  };

  const closeModals = e => {
    setDeleteProjectModalState(false);
    setEditProjectModalState(false);
  };

  const handleSignOut = () => {
    window.localStorage.setItem('dunton_admin', '');
    toggleLogin(false);
  };

  return (
    <>
      <LogoutContainer>
        <button
          onClick={handleSignOut}
          className="btn waves-effect waves-light"
        >
          Logout
        </button>
      </LogoutContainer>
      <Container>
        <div className="projects">
          <h3>Current Projects</h3>
          <div className="add-project">
            <i
              className="large material-icons"
              onClick={() => handleEditProjectClick(false, false)}
            >
              add_circle_outline
            </i>
          </div>
          <div className="card-holder">
            {projects.map((project, i) => {
              const { name, link, image } = project;
              return (
                <Card key={uuid()} className="blue-grey darken-1">
                  <div className="lockup">
                    <div>
                      <i
                        className="small material-icons"
                        onClick={() => handleEditProjectClick(project, i)}
                      >
                        create
                      </i>
                      <i
                        className="small material-icons"
                        onClick={() => handleDeleteProjectClick(project, i)}
                      >
                        clear
                      </i>
                    </div>
                  </div>

                  <div>
                    <h4>
                      Project Name: <span>{name}</span>
                    </h4>
                    <p>
                      link:
                      <a href={link} target="_blank">
                        {link}
                      </a>
                    </p>
                    <p>
                      image:
                      <a href={image} target="_blank">
                        {image}
                      </a>
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
        {deleteProjectModalState && (
          <Modal onClick={closeModals}>
            <div className="delete-modal">
              <div>
                <h6>Are you sure you want to delete this project?</h6>
                <button
                  className="btn waves-effect waves-light"
                  onClick={deleteProject}
                >
                  yes
                </button>
                <button
                  className="btn waves-effect waves-light"
                  onClick={() => setDeleteProjectModalState(false)}
                >
                  no
                </button>
              </div>
            </div>
          </Modal>
        )}

        {editProjectModalState && (
          <Modal onClick={closeModals}>
            <div className="project-modal" onClick={e => e.stopPropagation()}>
              <form onSubmit={saveProject}>
                <div className="input-field col s6">
                  <input
                    onChange={e => setFormName(e.target.value)}
                    placeholder={
                      projects[selectedProjectIndex]
                        ? projects[selectedProjectIndex].name
                        : 'name'
                    }
                    type="text"
                    value={formName}
                  />
                  <span className="helper-text">project name</span>
                </div>
                <div className="input-field col s6">
                  <input
                    onChange={e => setFormLink(e.target.value)}
                    placeholder={
                      projects[selectedProjectIndex]
                        ? projects[selectedProjectIndex].link
                        : 'link'
                    }
                    type="text"
                    value={formLink}
                  />
                  <span className="helper-text">project link</span>
                </div>
                <div className="input-field col s6">
                  <input
                    onChange={e => setFormImage(e.target.value)}
                    placeholder={
                      projects[selectedProjectIndex]
                        ? projects[selectedProjectIndex].image
                        : 'image'
                    }
                    type="text"
                    value={formImage}
                  />
                  <span className="helper-text">project image</span>
                </div>
                <button className="btn waves-effect waves-light" type="submit">
                  Save
                </button>
              </form>
            </div>
          </Modal>
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  .projects {
    margin-top: 10px;
    width: 100%;
    .add-project {
      display: flex;
      justify-content: flex-end;
      margin: 10px;
      i {
        color: #546e7a !important;
        cursor: pointer;
      }
    }
    h3 {
      padding: 50px;
      text-align: center;
      margin: 0;
    }
    h4 {
      span {
        color: #ffab40;
      }
    }
    .card-holder {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
  }
`;

const Card = styled.div`
  //background: #26a69a;
  width: 100%;
  margin: 0 20px 20px;
  color: white;
  position: relative;
  div {
    padding: 15px;
    a {
      color: #ffab40;
      margin-left: 5px;
      border-bottom: 1px solid #ffab40;
    }
  }
  .lockup {
    position: absolute;
    top: 5px;
    right: 5px;
    padding: 0;
    div {
      display: inline-flex;
      justify-content: center;
    }
  }
  i {
    cursor: pointer;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 100;
  background: rgba(0, 0, 0, 0.7);
  margin-top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .delete-modal {
    background: white;
    text-align: center;
    > div {
      padding: 20px;
      button {
        margin: 10px;
      }
    }
  }
  .project-modal {
    background: white;
    width: 50%;
    form {
      padding: 10px;
    }
  }
`;

const LogoutContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  button {
    margin: 10px;
  }
`;

export default CurrentProjects;
