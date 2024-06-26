import { useState } from "react";
import { useQuery } from '@tanstack/react-query';


const useModProInfo = (id) => {
    const modProDomain = import.meta.env.VITE_DOMAIN;
    const modProApiKey = import.meta.env.VITE_MMOD_API_KEY;

    const fetchInfo = async () => {
        try {
            // Constructing the URL correctly

            const url = `${modProDomain}/wp-json/wp/clenc/files?api_key=${modProApiKey}&files=${id}`;

            const response = await fetch(url);
            console.log("called once")
            if (!response.ok) {
                if (response.status === 404) throw new Error('Invalid URL');
                else throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            const filteredData = {
                'id':data?.id,
                "title":data?.title,
                "count":data?.count,
                "files":data?.files
            }
            return filteredData;
        } catch (error) {
            return {error};
        }
    };
    const { data: contentInfo, isError } = useQuery({
        queryKey: [`${id}-data`],
        queryFn: fetchInfo,
        staleTime: Infinity,
        enabled: !!id
      });
    
    return [contentInfo, isError];
};

export default useModProInfo;