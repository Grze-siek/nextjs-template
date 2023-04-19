'use client';
import { useEffect, useRef, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import Link from 'next/link';

interface SearchResult {
  _type: string;
  name: string;
  description: string;
  landingTitle: string;
  shortLandingDescription: string;
  aboutDescription: string;
  productDescription: string;
  lastSectionDescription: string;
  lastSectionSmallText: string;
}

function Search() {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [results, setResults] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (results && results.length !== 0 && query.length > 2) {
      setIsDropdownOpen(true);
    } else {
      setIsDropdownOpen(false);
    }
  }, [results, query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setQuery('');
        setIsFocused(false);
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [dropdownRef]);

  const handleInputClick = (event: React.MouseEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setIsFocused(true);
  };

  const handleSearch = async () => {
    if (query) {
      try {
        const res = await fetch(`/api/search?q=${query}`);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();

        if (data.results?.length === 0) {
          setResults([]);
        } else {
          setResults(data.results);
        }
      } catch (error) {
        console.error(error);
        setResults([]);
      }
    } else {
      setResults([]);
    }
  };

  function handleResultClick(result: SearchResult) {
    let path = '';
    switch (result._type) {
      case 'home':
        path = '/';
        break;
      case 'about':
        path = '/about';
        break;
      case 'product':
        const productName = result.name;
        path = `/product/${productName}`;
        break;
    }
    return `${path}?search=${query}`;
  }

  function getHighlightedText(text: string, query: string): string {
    const words = text.split(' ');

    // Find the index of the first word containing the query
    let startIndex = -1;
    for (let i = 0; i < words.length; i++) {
      if (words[i].toLowerCase().includes(query.toLowerCase())) {
        startIndex = i;
        break;
      }
    }

    // If query not found, return null
    if (startIndex === -1) {
      return '';
    }

    // Find the start and end indexes for the highlighted text
    const start = Math.max(0, startIndex - 5);
    const end = Math.min(words.length, startIndex + 6);

    // Build the highlighted text, bolding the query
    let highlightedText = words
      .slice(start, end)
      .join(' ')
      .replace(
        new RegExp(query, 'gi'),
        (match) => `<span class="font-bold">${match}</span>`
      );

    // Add ellipses if the start or end is not at the beginning or end of the text
    if (start > 0) {
      highlightedText = `... ${highlightedText}`;
    }
    if (end < words.length) {
      highlightedText = `${highlightedText} ...`;
    }

    return highlightedText;
  }

  return (
    <>
      <div
        onMouseEnter={() => setIsFocused(true)}
        onMouseLeave={() => {
          if (!query) {
            setIsFocused(false);
            setIsDropdownOpen(false);
          }
        }}
        className="relative flex flex-col items-end"
      >
        <CiSearch
          onMouseEnter={() => setIsFocused(true)}
          className="h-6 w-6 cursor-pointer absolute -right-1 mt-1 mr-2 z-10"
        />

        <form onSubmit={(e) => e.preventDefault()} className="relative">
          <input
            ref={inputRef}
            onClick={handleInputClick}
            onKeyUp={handleSearch}
            className={`${
              isFocused
                ? 'w-48 pl-4 pr-2'
                : 'w-0 border-none transform bg-transparent'
            } transition-all duration-300 border rounded-full border-gray-300 py-1 px-2 outline-none`}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>

        {isDropdownOpen && results && isFocused && (
          <div
            ref={dropdownRef}
            className="dropdown dropdown-open dropdown-end transition-all"
          >
            <ul
              tabIndex={0}
              className="dropdown-content p-4 shadow bg-base-100 rounded-box w-48 md:w-96 overflow-y-scroll max-h-48"
            >
              {results.map((result, index) => (
                <Link key={index} href={handleResultClick(result)}>
                  <li>
                    {Object.entries(result)
                      .filter(([key]) => key !== '_type')
                      .map(([key, value]) => {
                        if (typeof value === 'string') {
                          return (
                            <div
                              key={key}
                              className="border-b border-b-gray-300 last:border-none opacity-50 transition-opacity cursor-pointer hover:opacity-100"
                              dangerouslySetInnerHTML={{
                                __html: getHighlightedText(value, query),
                              }}
                            ></div>
                          );
                        }
                        return null;
                      })}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Search;
