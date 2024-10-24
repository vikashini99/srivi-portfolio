import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Button = styled.button`
    display: none;
    width: 100%;
    padding: 10px;
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.text_black};
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.8s ease-in-out;
`;
const Card = styled.div`
    width: 80%;
    max-width: 500px;
    height: 490px;
    background: linear-gradient(145deg, #F9742A, #232323);
    background-blend-mode: multiply;
    background-image: url('/path/to/texture.png'); /* Optional texture image */
    cursor: pointer;
    border: 2px solid rgba(151, 151, 151, 0.6);  /* Semi-transparent gray border */
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(249, 116, 42, 0.6);
    }

    &:hover ${Button} {
        display: block;
    }

    padding: 15px;
`;







const Image = styled.img`
    width: 100%;
    height: 260px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 0;
    box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`;

const Tag = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary + 15};
    padding: 2px 8px;
    border-radius: 10px;
`;

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0;
    padding: 0 2px;
`;

const Title = styled.div`
    font-size: 25px;
    font-weight: 600;
    color: ${({ theme }) => theme.secondary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    font-family: 'Yeseva One', cursive;
`;

const Date = styled.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};

    @media only screen and (max-width: 768px) {
        font-size: 10px;
    }
`;

const Description = styled.div`
    font-weight: 310;
    color: ${({ theme }) => theme.gray_one };
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
`;

const Members = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`;

const Avatar = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border: 3px solid ${({ theme }) => theme.card};
`;

const ProjectCards = ({ project }) => {
    const navigate = useNavigate(); 

    const handleCardClick = () => {
        navigate(`/projects/${project.id}`); 
    };

    return (
        <Card onClick={handleCardClick}>
            <Image src={project.image} alt={project.title} />
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>
            <Tags>
                {project.tags?.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                ))}
            </Tags>
            <Members>
                {project.members?.map((member, index) => (
                    <Avatar key={index} src={member.img} alt={member.name} />
                ))}
            </Members>
        </Card>
    );
};

export default ProjectCards;
