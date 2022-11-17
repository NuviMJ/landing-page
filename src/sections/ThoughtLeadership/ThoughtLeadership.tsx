import React, { useEffect, useState } from "react";

// @ts-ignore
import searchIcon from "../../assets/img/icons/search.svg";
import Input from "../../components/Input/Input";
import ThoughtCard from "../../components/ThoughtCard/ThoughtCard";

// @ts-ignore
import i1Icon from "../../assets/img/icons/cIcon.svg";
import moment from "moment";
import { Link } from "gatsby";
import Fuse from "fuse.js";
import DropDown from "../../components/DropDown/DropDown";

import "./ThoughtLeadership.scss";

interface ThoughtLeadership {
  data: any;
}

const ThoughtLeadership: React.FC<ThoughtLeadership> = ({ data: pages }) => {
  const [pagesFiltered, setPagesFiltered] = useState<any[]>(pages);
  const [sort, setSort] = useState<any>("dateDesc");

  useEffect(() => {
    setPagesFiltered(pages!);
  }, [pages]);

  useEffect(() => {
    const sorted = pages?.sort((objA: any, objB: any) => {
      if (sort == "dateDesc") {
        return (
          +new Date(objB.last_publication_date) -
          +new Date(objA.last_publication_date)
        );
      } else {
        return (
          +new Date(objA.last_publication_date) -
          +new Date(objB.last_publication_date)
        );
      }
    });
    setPagesFiltered(sorted);
  }, [sort]);

  if (sort) {
    pagesFiltered?.sort((objA: any, objB: any) => {
      if (sort == "dateDesc") {
        return (
          +new Date(objB.last_publication_date) -
          +new Date(objA.last_publication_date)
        );
      } else {
        return (
          +new Date(objA.last_publication_date) -
          +new Date(objB.last_publication_date)
        );
      }
    });
  }

  const handleSortChange = (e: any) => {
    setSort(e.target.value);
  };
  const handleOnSearch = (query: string, keys: any[]) => {
    const options = {
      includeScore: true,
      keys: keys,
    };

    const fuse = new Fuse(pages!, options);
    const results = fuse.search(query);
    const finalResult: any = [];
    if (query) {
      results.forEach((item) => {
        finalResult.push(item.item);
      });
      setPagesFiltered(finalResult);
    } else {
      setPagesFiltered(pages!);
    }
  };
  return (
    <div className="ThoughtLeadership">
      <div>
        <div></div>
        <div className="ThoughtLeadership-contentContainer">
          <div>
            <p className="h1-red">The future of coaching</p>
            <h2>Thought Leadership</h2>
          </div>
        </div>
        <div className="ThoughtLeadership-inputContainer">
          <Input
            onChange={(e) =>
              handleOnSearch(e.target.value, [
                "data.subject.text",
                "data.title.text",
              ])
            }
            placeHolder="Search"
            name="search"
            icon={searchIcon}
          />
          <DropDown
            value={sort}
            onChange={handleSortChange}
            placeHolder="Sort By"
            name="new"
            icon={searchIcon}
          />
          <Input
            onChange={(e) =>
              handleOnSearch(e.target.value, ["data.subject.text"])
            }
            placeHolder="Subject"
            name="sub"
            icon={searchIcon}
          />
        </div>
        <div className="ThoughtLeadership-cardContainer">
          {pagesFiltered?.map((page: any) => {
            // console.log(moment(page.last_publication_date).format('MMMM D, YYYY'))
            return (
              <div key={page.id}>
                <Link
                  style={{ height: "100%" }}
                  to={`/thought-leadership/${page.uid}`}
                  state={page}
                >
                  <ThoughtCard
                    subject={page.data.subject?.text}
                    thumb={page.data.image.url}
                    title={page.data.title.text}
                    icon={i1Icon}
                    company="Coachello"
                    date={moment(page.last_publication_date).format(
                      "MMMM D, YYYY"
                    )}
                  />
                </Link>
              </div>
            );
          })}
        </div>
        <div className="ThoughtLeadership-buttonContainer">
          {/*<button className="ThoughtLeadership-button">Learn More</button>*/}
        </div>
      </div>
    </div>
  );
};

export default ThoughtLeadership;
