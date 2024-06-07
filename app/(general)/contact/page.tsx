import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact title",
    description: "Contact Description",
    keywords: ['Contact Page', 'Fernando', 'Informacion']
  };


export default function Contact(){
    return(
        <>
            <span>Contact</span>
        </>
    )
}