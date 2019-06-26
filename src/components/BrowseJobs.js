import React from "react";
import { Helmet } from "react-helmet";

export default class BrowseJobs extends React.Component {
  render() {
    const projects = [
      {
        _id: "5d09004b6671ff7ee32e1f01",
        index: 0,
        guid: "e0f08879-12a5-4c6e-b31d-dd9d1be2fced",
        isActive: true,
        daysLeft: 228,
        title: "adipisicing reprehenderit veniam irure et",
        description:
          "Elit enim tempor pariatur veniam amet adipisicing. Adipisicing proident anim laborum nulla aliqua. Culpa ex irure sit ex nulla nulla in. Pariatur magna commodo deserunt nisi esse. Esse ipsum et elit laboris aliquip irure sunt minim mollit. Sit sit adipisicing dolor quis ea qui nulla consequat dolore. Laborum reprehenderit id veniam ad ea.\r\n",
        tags: [
          "do",
          "dolor",
          "aliqua",
          "pariatur",
          "tempor",
          "laborum",
          "anim"
        ],
        currentBidCount: 5
      },
      {
        _id: "5d09004bf78a1b5cfa9bdde3",
        index: 1,
        guid: "feffdcc9-e13e-43a6-9587-c18bd50eb5fb",
        isActive: false,
        daysLeft: 125,
        title: "aliquip et cupidatat ea cupidatat",
        description:
          "Proident tempor sit labore ipsum excepteur nulla do. Non ut minim nisi aliquip nulla consequat occaecat deserunt officia culpa adipisicing dolor eu. Qui et pariatur laboris id aute enim nulla laboris excepteur minim Lorem Lorem id. Qui non duis eu non ad deserunt id quis qui adipisicing.\r\n",
        tags: [
          "anim",
          "laboris",
          "voluptate",
          "irure",
          "duis",
          "exercitation",
          "qui"
        ],
        currentBidCount: 45
      },
      {
        _id: "5d09004bf37ed834b671eef2",
        index: 2,
        guid: "a9bd9625-9f3f-4000-9f58-2fa7f8b88acf",
        isActive: true,
        daysLeft: 613,
        title: "ullamco eiusmod culpa ea incididunt",
        description:
          "Commodo ullamco esse deserunt eu mollit sit anim ullamco. Ullamco consequat esse fugiat ullamco pariatur elit ea ut fugiat qui ullamco eiusmod. Mollit eu adipisicing amet veniam in. Dolore irure eu labore ipsum voluptate in aliquip sit. Velit reprehenderit ex ullamco proident nulla non occaecat et magna sit ea consectetur.\r\n",
        tags: [
          "culpa",
          "cupidatat",
          "mollit",
          "laboris",
          "velit",
          "in",
          "officia"
        ],
        currentBidCount: 36
      },
      {
        _id: "5d09004b6097df4b15d23223",
        index: 3,
        guid: "0d8f719f-3e12-45fb-aa53-36fa5bd17ed9",
        isActive: false,
        daysLeft: 429,
        title: "duis eu voluptate irure aliqua",
        description:
          "Incididunt laborum deserunt duis fugiat mollit et. Duis irure magna consequat esse tempor. Velit exercitation magna nisi quis. Magna excepteur mollit est aute cupidatat. Magna ut labore quis amet ea sint. Et cupidatat magna deserunt ullamco cupidatat velit sit excepteur commodo in in qui voluptate incididunt.\r\n",
        tags: [
          "reprehenderit",
          "nisi",
          "mollit",
          "ea",
          "consequat",
          "culpa",
          "proident"
        ],
        currentBidCount: 41
      },
      {
        _id: "5d09004bfe4535fcaa45142a",
        index: 4,
        guid: "edeb7d96-f3da-4408-8854-975568691698",
        isActive: false,
        daysLeft: 812,
        title: "est veniam ipsum ad deserunt",
        description:
          "Cillum magna labore est adipisicing exercitation magna pariatur. Aute occaecat cupidatat aliquip duis est eiusmod dolore et duis incididunt cillum. Commodo sunt velit cupidatat reprehenderit ea incididunt sint aliqua. Tempor nulla deserunt nulla sit sit amet consequat reprehenderit cupidatat. Dolor laborum esse irure laborum ut do deserunt elit duis incididunt deserunt.\r\n",
        tags: [
          "mollit",
          "cupidatat",
          "ad",
          "ex",
          "exercitation",
          "ipsum",
          "tempor"
        ],
        currentBidCount: 4
      },
      {
        _id: "5d09004bdc81dca803f9004d",
        index: 5,
        guid: "98e2caf0-32a7-45c6-b1bd-081f33575167",
        isActive: false,
        daysLeft: 862,
        title: "tempor sit voluptate et in",
        description:
          "Reprehenderit exercitation sit officia duis nostrud est aliquip incididunt pariatur deserunt ut. Laboris Lorem cillum ex commodo ipsum sunt aliqua. Incididunt tempor ullamco in aliqua quis cupidatat veniam officia. Sint nisi occaecat veniam sunt ipsum deserunt.\r\n",
        tags: [
          "eiusmod",
          "dolor",
          "sint",
          "consectetur",
          "laboris",
          "velit",
          "nisi"
        ],
        currentBidCount: 45
      },
      {
        _id: "5d09004b6c0c6f901a0f23a5",
        index: 6,
        guid: "fabe73bd-9c61-405f-815a-1fee2eb8bff9",
        isActive: true,
        daysLeft: 888,
        title: "irure aliqua veniam esse adipisicing",
        description:
          "Deserunt aliqua velit eu laborum id duis cillum amet dolore dolor aliquip eu ex. Aliquip sint in dolor id duis. Minim labore occaecat quis duis sit consequat. Ut labore id tempor ullamco exercitation ex. Labore sunt eu consectetur laboris anim exercitation sunt irure nisi aliquip veniam adipisicing. Elit sint sint sint proident. Velit exercitation deserunt dolor anim duis aute proident esse tempor.\r\n",
        tags: [
          "ad",
          "ullamco",
          "minim",
          "officia",
          "consectetur",
          "excepteur",
          "sint"
        ],
        currentBidCount: 18
      },
      {
        _id: "5d09004b9534bef59410fc95",
        index: 7,
        guid: "3df97e2d-a7a4-4644-a691-d56a9e4bcdd2",
        isActive: false,
        daysLeft: 841,
        title: "sint exercitation qui qui minim",
        description:
          "Nostrud laboris in est nulla incididunt anim laborum. Ea consequat dolor nostrud cupidatat enim aute et. Minim deserunt magna cillum qui sunt consequat labore eiusmod officia Lorem. Aute aliqua amet quis pariatur culpa consectetur aliqua aliquip. Amet voluptate consectetur sint consectetur irure amet aliquip in proident pariatur tempor cupidatat deserunt.\r\n",
        tags: [
          "fugiat",
          "do",
          "exercitation",
          "exercitation",
          "ullamco",
          "aute",
          "reprehenderit"
        ],
        currentBidCount: 20
      },
      {
        _id: "5d09004b3a4b26bee8a5d6c7",
        index: 8,
        guid: "d16f8075-141a-475b-9a83-985e0609f48f",
        isActive: false,
        daysLeft: 727,
        title: "voluptate incididunt cupidatat aliqua eiusmod",
        description:
          "Anim irure adipisicing ad nisi cupidatat eu cillum nulla commodo. Nostrud consequat qui esse nulla sunt commodo consequat velit aliquip commodo aliquip. Incididunt minim est voluptate cupidatat ad laborum incididunt consectetur ullamco amet est sunt deserunt dolore.\r\n",
        tags: ["aliquip", "elit", "enim", "sunt", "laboris", "veniam", "enim"],
        currentBidCount: 30
      },
      {
        _id: "5d09004b3617c38185ccbdcb",
        index: 9,
        guid: "abdefb99-c458-4f1a-bd2c-5a20f5a8a7e0",
        isActive: false,
        daysLeft: 240,
        title: "reprehenderit minim sint laborum culpa",
        description:
          "Do nulla qui id reprehenderit voluptate aliquip minim adipisicing nostrud eiusmod ad. Ullamco ut mollit excepteur proident eu eu. Aute ut sint tempor sit duis qui cillum sit irure magna ipsum veniam. Consequat officia laboris laborum aliquip aliquip nisi incididunt sunt id. Aliqua voluptate in ea nulla laboris.\r\n",
        tags: ["voluptate", "dolor", "elit", "sint", "qui", "fugiat", "non"],
        currentBidCount: 46
      },
      {
        _id: "5d09004b6b2e3cab70b5cee3",
        index: 10,
        guid: "eea97b7b-e4d6-489d-99be-6da49a147aac",
        isActive: true,
        daysLeft: 965,
        title: "mollit eiusmod quis quis est",
        description:
          "Nulla sint dolor adipisicing esse. Laboris anim anim ipsum mollit. Fugiat sit ea occaecat magna consequat. Eiusmod incididunt nostrud culpa dolor laboris nostrud sunt cillum tempor exercitation. Et ut incididunt qui esse dolore do exercitation aute esse tempor laboris aliquip adipisicing.\r\n",
        tags: [
          "dolore",
          "eiusmod",
          "ex",
          "excepteur",
          "occaecat",
          "cupidatat",
          "enim"
        ],
        currentBidCount: 7
      },
      {
        _id: "5d09004b587bf04541214cac",
        index: 11,
        guid: "1a767c24-ad7a-4a8a-be7e-cf74d8c213ab",
        isActive: false,
        daysLeft: 116,
        title: "amet fugiat aute est labore",
        description:
          "Ad eu proident elit aliqua elit pariatur dolore mollit tempor magna consequat in. Eu exercitation duis fugiat officia id mollit ad nulla est sint. Velit fugiat ad in officia. Ullamco duis aliquip excepteur eu reprehenderit occaecat consectetur nisi cillum.\r\n",
        tags: ["elit", "mollit", "veniam", "sint", "occaecat", "ea", "dolor"],
        currentBidCount: 21
      }
    ];

    return (
      <div className="container py-5">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Latest jobs | tripaider.in</title>
        </Helmet>
        <h2 className="text-center mb-5">Latest jobs</h2>
        <div className="row">
          <div className="col-md-3">Filters</div>
          <div className="col-md-9">
            {projects.map(
              ({
                _id,
                title,
                daysLeft,
                description,
                tags,
                currentBidCount
              }) => (
                <div
                  key={_id}
                  className="row mb-3"
                  style={{ borderBottom: "1px dashed #ebebeb" }}
                >
                  <div className="col-md-8">
                    <h5 style={{ textTransform: "capitalize" }}>
                      {title}{" "}
                      <small
                        className="text-secondary"
                        style={{ textTransform: "lowercase" }}
                      >
                        {daysLeft} day(s) left
                      </small>
                    </h5>
                    <p>{description}</p>
                    <ul style={{ padding: "0" }}>
                      {tags.map((tag, i) => (
                        <li
                          key={i}
                          style={{
                            display: "inline-block",
                            marginRight: "10px"
                          }}
                        >
                          <a href="#">{tag}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <p style={{ fontWeight: "bold" }}>Average bid: $500 USD</p>
                    <p>{currentBidCount} bid(s)</p>
                    <button className="btn btn-primary">Place bid</button>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}
