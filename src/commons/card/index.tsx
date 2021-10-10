import React from 'react';
import { CardProps } from './interface';
const Card: React.FC<CardProps> = ({ img, title, description, path }) => {

    return (
        <div className="w-full h-full card">
            <div className="bg-white h-full shadow-md border border-gray-200 rounded-lg mb-5">
                <a target="_blank" rel="noopenner noreferrer" href={path}>
                    {img ? (
                        <img className="rounded-t-lg h-64 w-full" src={img} alt="" />)
                        : <div className="rounded-t-lg h-64 w-full bg-blue-50" />}
                </a>
                <div className="p-5">
                    <h5 className="text-gray-900 font-bold text-2xl mb-2">{title ? title : null}</h5>
                    <p className="font-normal text-gray-700 mb-3">{description}</p>
                    <a target="_blank" rel="noopenner noreferrer" href={path}>
                        <div className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                        focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
                            Read more
                        </div>
                    </a>
                </div>
            </div>
        </div>);
};

export default Card;