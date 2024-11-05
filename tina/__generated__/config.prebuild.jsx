// tina/config.ts
import { defineConfig, LocalAuthProvider } from "tinacms";
import { TinaUserCollection, UsernamePasswordAuthJSProvider } from "tinacms-authjs/dist/tinacms";
import _3 from "underscore";

// config.json
var config_default = {
  content: [
    "paths",
    "posts"
  ],
  i18n: {
    default_locale: "en",
    locales: [
      "en"
    ]
  },
  layers: [
    {
      name: "Maptiler DataViz Style",
      layer_type: "vector",
      url: "https://api.maptiler.com/maps/dataviz/style.json?key=WLMbLZP1AwK3zUFTeheB"
    },
    {
      name: "USGS Imagery Topo (MapServer)",
      layer_type: "raster",
      url: "https://basemap.nationalmap.gov/arcgis/services/USGSImageryTopo/MapServer/WMSServer?bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:3857&transparent=true&width=256&height=256&layers=0&styles=default"
    },
    {
      name: "USGS Topo (MapServer)",
      layer_type: "raster",
      foo: "https://basemap.nationalmap.gov/arcgis/services/USGSTopo/MapServer/WMSServer?bbox=%7Bbbox-epsg-3857%7D&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:3857&transparent=true&width=256&height=256&layers=0&styles=default",
      url: "https://basemap.nationalmap.gov/arcgis/services/USGSTopo/MapServer/WMSServer?bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:3857&transparent=true&width=256&height=256&layers=0&styles=default"
    },
    {
      name: "New Jersey Natural Earth (WMS)",
      layer_type: "raster",
      url: "https://img.nj.gov/imagerywms/Natural2015?bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:3857&transparent=true&width=256&height=256&layers=Natural2015",
      overlay: true
    },
    {
      name: "US States",
      layer_type: "geojson",
      url: "gz_2010_us_040_00_20m.json",
      description: "Data from the United States Census Bureau. https://eric.clst.org/tech/usgeojson/",
      overlay: true
    }
  ],
  search: {
    cluster_radius: 6,
    result_card: {
      title: "name"
    }
  },
  typesense: {
    host: "i74olkjcuy69ze2vp-1.a1.typesense.net",
    port: 443,
    protocol: "https",
    api_key: "PSNp8MUfQBInjahcHQ3l76jChrHZHqmj",
    index_name: "scavenger_hunt",
    query_by: "name"
  },
  core_data: {
    url: "https://staging.coredata.cloud",
    project_ids: [
      43,
      44,
      45
    ]
  }
};

// tina/content/about.ts
var About = {
  name: "about",
  label: "About the Project",
  path: "content/about",
  format: "mdx",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Project Title"
    },
    {
      type: "string",
      name: "subheader",
      label: "Subheader",
      ui: {
        component: "textarea"
      }
    },
    {
      type: "rich-text",
      name: "description",
      label: "Project Description",
      isBody: true
    },
    {
      type: "image",
      name: "heroImage",
      label: "Hero Image"
    },
    {
      type: "image",
      name: "featureImage",
      label: "Feature Image"
    }
  ],
  ui: {
    allowedActions: {
      create: false,
      delete: false
    }
  }
};
var about_default = About;

// src/i18n/i18n.json
var i18n_default = {
  map: {
    tinaLabel: "Map",
    defaultValue: "Map"
  },
  home: {
    tinaLabel: "Home",
    defaultValue: "Home"
  },
  about: {
    tinaLabel: "About",
    defaultValue: "About"
  },
  paths: {
    tinaLabel: "Paths",
    defaultValue: "Paths"
  },
  posts: {
    tinaLabel: "Posts",
    defaultValue: "Posts"
  },
  openMainMenu: {
    tinaLabel: "Open Main Menu",
    defaultValue: "Open Main Menu"
  },
  untitled: {
    tinaLabel: "Untitled",
    defaultValue: "Untitled"
  },
  mapLayers: {
    tinaLabel: "Map Layers",
    defaultValue: "Map Layers"
  },
  relatedMedia: {
    tinaLabel: "Related Media",
    defaultValue: "Related Media"
  },
  relatedMediaEmpty: {
    tinaLabel: "No related media",
    defaultValue: "No related media"
  },
  relatedOrganizations: {
    tinaLabel: "Related Organizations",
    defaultValue: "Related Organizations"
  },
  relatedOrganizationsEmpty: {
    tinaLabel: "No related organizations",
    defaultValue: "No related organizations"
  },
  relatedPeople: {
    tinaLabel: "Related People",
    defaultValue: "Related People"
  },
  relatedPeopleEmpty: {
    tinaLabel: "No related people",
    defaultValue: "No related people"
  },
  relatedPlaces: {
    tinaLabel: "Related Places",
    defaultValue: "Related Places"
  },
  relatedPlacesEmpty: {
    tinaLabel: "No related places",
    defaultValue: "No related places"
  },
  relatedTaxonomies: {
    tinaLabel: "Related Taxonomies",
    defaultValue: "Related Taxonomies"
  },
  relatedTaxonomiesEmpty: {
    tinaLabel: "No related taxonomies",
    defaultValue: "No related taxonomies"
  },
  loadMore: {
    tinaLabel: "Load More",
    defaultValue: "Load More"
  },
  none: {
    tinaLabel: "None",
    defaultValue: "None"
  },
  baseLayers: {
    tinaLabel: "Base Layers",
    defaultValue: "Base Layers"
  },
  overlays: {
    tinaLabel: "Overlays",
    defaultValue: "Overlays"
  },
  aboutProject: {
    tinaLabel: "About the Project",
    defaultValue: "About the Project"
  },
  startTour: {
    tinaLabel: "Start the Tour",
    defaultValue: "Start the Tour"
  },
  readMore: {
    tinaLabel: "Read More",
    defaultValue: "Read More"
  },
  footerText: {
    tinaLabel: "(footer text)",
    defaultValue: ""
  },
  footerCopyright: {
    tinaLabel: "(footer copyright)",
    defaultValue: ""
  },
  coreDataLogin: {
    tinaLabel: "Log in to Core Data",
    defaultValue: "Log into Core Data"
  },
  tinaLogin: {
    tinaLabel: "Log in to Tina CMS",
    defaultValue: "Log in to Tina CMS"
  },
  andCountMore: {
    tinaLabel: "and <count> more",
    defaultValue: "and {{count}} more"
  },
  resultsCount: {
    tinaLabel: "<count> results for <query>",
    defaultValue: "{{count}} results for {{query}}"
  },
  resultsCountSingular: {
    tinaLabel: "1 result for <query>",
    defaultValue: "1 result for {{query}}"
  },
  filters: {
    tinaLabel: "Filters",
    defaultValue: "Filters"
  },
  filterMapBounds: {
    tinaLabel: "Filter by map bounds",
    defaultValue: "Filter by map bounds"
  },
  plusCount: {
    tinaLabel: "+ <count>",
    defaultValue: "+{{count}}"
  },
  title: {
    tinaLabel: "Name"
  },
  root: {
    tinaLabel: "Root"
  },
  owner_project: {
    tinaLabel: "Owner Project"
  },
  all_projects: {
    tinaLabel: "All Projects"
  },
  owner_project_id: {
    tinaLabel: "Owner Project -> ID"
  },
  all_projects_id: {
    tinaLabel: "All Projects -> ID"
  },
  owner_project_name: {
    tinaLabel: "Owner Project -> Name"
  },
  all_projects_name: {
    tinaLabel: "All Projects -> Name"
  },
  event_range: {
    tinaLabel: "Event Range"
  }
};

// src/i18n/userDefinedFields.json
var userDefinedFields_default = {
  "5459a2c6-0371-457e-b287-ca5eccfdff1d": {
    tinaLabel: "Persons",
    defaultValue: "Persons"
  },
  "94b06237-fb7f-404e-b34d-df0b0f4a5493": {
    tinaLabel: "Persons -> Tourist",
    defaultValue: "Tourist"
  },
  "dcf67bea-fe82-41e8-af1b-7ce23f21f4b8": {
    tinaLabel: "Photos",
    defaultValue: "Photos"
  },
  "72931bfc-f624-4dff-9d48-5a752a6e5848": {
    tinaLabel: "Videos",
    defaultValue: "Videos"
  },
  "9ae8e319-dd8e-4563-89b9-740fd875b273": {
    tinaLabel: "Places",
    defaultValue: "Places"
  },
  "1ad957bc-5bc6-4c68-afcf-2ae49e26d537": {
    tinaLabel: "Places -> Description",
    defaultValue: "Description"
  },
  "be3a41e9-3ae4-40a0-a023-4763a577e2e4": {
    tinaLabel: "Events",
    defaultValue: "Events"
  },
  "72797c9b-5f65-4bd9-b675-3672014581e5": {
    tinaLabel: "Objects and Statues",
    defaultValue: "Objects and Statues"
  },
  "c54444aa-31cd-4223-9d43-75bf0d77c8e3": {
    tinaLabel: "Organizations",
    defaultValue: "Organizations"
  },
  "e5f83437-a1c0-47f5-9c31-1f7bb62b16b0": {
    tinaLabel: "Works",
    defaultValue: "Works"
  },
  "c9f2dde8-a181-477c-b166-5a3b94d1da9d": {
    tinaLabel: "Places -> Photos from this place",
    defaultValue: "Photos from this place"
  },
  "6e89decd-b884-47ef-a052-a2f49ab4c33c": {
    tinaLabel: "Places -> People",
    defaultValue: "People"
  },
  "a6e80041-1657-4343-9582-e1b5fbe73d58": {
    tinaLabel: "Places -> Organizations",
    defaultValue: "Organizations"
  },
  "4020453e-2a71-4759-b133-625071449e17": {
    tinaLabel: "Places -> Events",
    defaultValue: "Events"
  },
  "b2726ef3-a279-4b48-9897-1a3be388bf92": {
    tinaLabel: "Places -> Works",
    defaultValue: "Works"
  },
  "76c3e781-9c64-41aa-b8fb-ca78190ab676": {
    tinaLabel: "Places -> Related Places",
    defaultValue: "Related Places"
  },
  "447360ec-3f60-4397-b7c1-9161821651eb": {
    tinaLabel: "Events -> People",
    defaultValue: "People"
  },
  "5e38448c-be42-423e-8103-dd082517f0ae": {
    tinaLabel: "Events -> Photos from this event",
    defaultValue: "Photos from this event"
  },
  "7c9de1f3-efc8-4131-a5c4-565a8758977d": {
    tinaLabel: "Photos -> Events associated with this photo",
    defaultValue: "Events associated with this photo"
  },
  "d63bdbb5-0c7d-4ae7-b869-7d7884835675": {
    tinaLabel: "Store",
    defaultValue: "Store"
  },
  "6915e33c-a864-41e2-a1c3-7d54e4deb984": {
    tinaLabel: "Store -> URL",
    defaultValue: "URL"
  },
  "38fdfecb-5f8f-4085-8bfa-6640c410fa36": {
    tinaLabel: "Store -> Refreshments",
    defaultValue: "Refreshments"
  },
  "6b38e52b-e3d4-4135-be7a-3c5cbd34ad89": {
    tinaLabel: "Store -> Space configuration",
    defaultValue: "Space configuration"
  },
  "3f742b67-b84c-47c2-af82-17a68abbe2f5": {
    tinaLabel: "Store type",
    defaultValue: "Store type"
  },
  "988158a4-4135-4a02-9dad-fb37462ec33f": {
    tinaLabel: "Event",
    defaultValue: "Event"
  },
  "77f68d53-bb39-4b2e-9d17-a756be13e7d0": {
    tinaLabel: "Event -> Event type",
    defaultValue: "Event type"
  },
  "010f31ac-dd22-4628-b37e-f63753da85ce": {
    tinaLabel: "Author",
    defaultValue: "Author"
  },
  "90e51364-5405-4edc-b9bc-a911d89c11b6": {
    tinaLabel: "Book title",
    defaultValue: "Book title"
  },
  "d0e9b29b-5845-428f-8643-355fa40ce9b0": {
    tinaLabel: "Characteristics",
    defaultValue: "Characteristics"
  },
  "8f0fef17-8f30-4eee-b29f-a6bcddb73583": {
    tinaLabel: "T Stop",
    defaultValue: "T Stop"
  },
  "c1567482-ef22-4c79-b0e0-fd1a351c62d2": {
    tinaLabel: "Image",
    defaultValue: "Image"
  },
  "1c4e9957-c627-435d-a91c-baee051b7436": {
    tinaLabel: "Store -> Upcoming events",
    defaultValue: "Upcoming events"
  },
  "8677bf89-b2c2-4ced-816b-be388460c043": {
    tinaLabel: "Store -> Characteristics",
    defaultValue: "Characteristics"
  },
  "0eb50f0c-8015-4d0e-8cf6-f36c291c889a": {
    tinaLabel: "Event -> Author",
    defaultValue: "Author"
  },
  "307e3603-d8bf-42ca-8565-e590b187da80": {
    tinaLabel: "Author -> Book",
    defaultValue: "Book"
  },
  "700dd643-b4a2-4f3c-8336-9e15a423dee8": {
    tinaLabel: "Store -> Closest T Stop",
    defaultValue: "Closest T Stop"
  },
  "7e81da4a-6772-4d9c-952e-99921ef1d2f0": {
    tinaLabel: "Store -> Store images",
    defaultValue: "Store images"
  },
  "f49250ec-cbf2-40ec-a4f2-62bcf667e576": {
    tinaLabel: "Store -> Store type",
    defaultValue: "Store type"
  },
  "37c68d4f-638e-4bff-86f8-06afb4acea42": {
    tinaLabel: "Event -> Related Works",
    defaultValue: "Related Works"
  },
  "be0bb9e2-47f7-4d20-a9cf-0e06f6e6f63c": {
    tinaLabel: "Places",
    defaultValue: "Places"
  },
  "9a5a15b3-f1a7-4820-87f0-e44dc211d0dd": {
    tinaLabel: "Places -> Place Type",
    defaultValue: "Place Type"
  },
  "be56b77c-3010-4398-9df2-62d09de606fc": {
    tinaLabel: "Images",
    defaultValue: "Images"
  },
  "25aec5fb-add0-468f-83dc-5555ac8f8e9c": {
    tinaLabel: "People",
    defaultValue: "People"
  },
  "c71827bc-4545-463a-8b4a-7800aa2e7638": {
    tinaLabel: "Lifetime",
    defaultValue: "Lifetime"
  },
  "60fbb406-3a7c-4459-a1df-699c23f23c82": {
    tinaLabel: "People -> Places where this person was",
    defaultValue: "Places where this person was"
  },
  "1dc3722d-efbc-46c6-a857-1ca8c7a76809": {
    tinaLabel: "People -> Lifetime",
    defaultValue: "Lifetime"
  },
  "1910ce4f-41c9-48e9-a496-79a613b8f355": {
    tinaLabel: "People -> Media",
    defaultValue: "Media"
  },
  "29ade009-d9ee-4827-8b89-96c1b2c8f0dd": {
    tinaLabel: "Places -> Media",
    defaultValue: "Media"
  }
};

// src/i18n/utils.ts
import _ from "underscore";
var TRANSLATION_PREFIX = "t_";
var getTranslationKey = (key) => {
  return `${TRANSLATION_PREFIX}${key.replaceAll("-", "").replaceAll(" ", "").replaceAll(".", "_")}`;
};

// tina/content/i18n.ts
var allFields = {
  ...i18n_default,
  ...userDefinedFields_default
};
var fields = Object.keys(allFields).map((key) => ({
  name: getTranslationKey(key),
  label: allFields[key].tinaLabel,
  type: "string",
  ui: {
    //@ts-ignore
    component: allFields[key]?.textArea ? "textarea" : "text"
  }
}));
var I18n = {
  name: "i18n",
  format: "json",
  label: "Internationalization",
  path: "content/i18n",
  fields
};
var i18n_default2 = I18n;

// tina/utils/index.ts
import _2 from "underscore";
var buildSearchParameters = (params) => {
  const searchParams = new URLSearchParams(params);
  _2.each(config_default.core_data.project_ids, (projectId) => {
    searchParams.append("project_ids[]", projectId.toString());
  });
  return searchParams.toString();
};
var getPlacesURL = (params = {}) => {
  const url = `${config_default.core_data.url}/core_data/public/v1/places`;
  const searchParams = buildSearchParameters(params);
  return `${url}?${searchParams}`;
};
var getPlaceURL = (id, params = {}) => {
  const url = `${config_default.core_data.url}/core_data/public/v1/places/${id}`;
  const searchParams = buildSearchParameters(params);
  return `${url}?${searchParams}`;
};

// tina/components/TinaPlacePicker.tsx
import { Combobox, Switch } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useCallback, useEffect, useState } from "react";
import { wrapFieldsWithMeta } from "tinacms";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var TinaPlacePicker = wrapFieldsWithMeta((props) => {
  const [places, setPlaces] = useState();
  const [query, setQuery] = useState("");
  const [filteredPlaces, setFilteredPlaces] = useState();
  const [selectedPlace, setSelectedPlace] = useState();
  const [message, setMessage] = useState("");
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const fetchPlace = useCallback((id) => {
    const url = getPlaceURL(id);
    return fetch(url).then((response) => response.json());
  }, []);
  const fetchPlaces = useCallback((params = {}) => {
    const url = getPlacesURL(params);
    return fetch(url).then((response) => response.json());
  }, []);
  const toggleAnimate = (e) => {
    const newData = {
      ...props.input.value,
      animate: e
    };
    props.input.onChange(newData);
  };
  const onUpdatePlace = (e) => {
    const newData = {
      ...props.input.value,
      uuid: e.uuid,
      title: e.title
    };
    props.input.onChange(newData);
  };
  const onUpdateLayer = (e) => {
    const newLayer = !props.input.value?.layer ? [parseInt(e.target.value)] : props.input.value.layer.includes(parseInt(e.target.value)) ? props.input.value.layer.filter((layer) => parseInt(layer) != parseInt(e.target.value)) : [...props.input.value.layer, parseInt(e.target.value)];
    const newData = {
      ...props.input.value,
      layer: newLayer
    };
    props.input.onChange(newData);
  };
  const onUpdateBuffer = (e) => {
    const newData = {
      ...props.input.value,
      buffer: e.target.valueAsNumber
    };
    props.input.onChange(newData);
  };
  useEffect(() => {
    fetchPlaces({ per_page: 0 }).then((data) => setPlaces(data.places));
  }, []);
  useEffect(() => {
    const { uuid } = props.input.value;
    if (uuid) {
      fetchPlace(uuid).then((data) => setSelectedPlace(data.place));
    }
  }, []);
  useEffect(() => {
    places && setFilteredPlaces(query === "" ? places : places.filter((place) => place.name.toLowerCase().includes(query.toLowerCase())));
  }, [places, query]);
  useEffect(() => {
    if (selectedPlace && !selectedPlace.place_geometry) {
      setMessage("NOTE: The selected place has no specified location in Core Data. This may cause errors.");
    } else {
      setMessage("");
    }
  }, [selectedPlace]);
  return jsxs("div", { children: [
    jsx(
      Combobox,
      {
        onChange: onUpdatePlace,
        value: {
          title: props.input.value?.title,
          uuid: props.input.value?.uuid
        },
        children: jsx(
          "div",
          {
            className: "z-[9999] relative",
            children: jsxs(
              "div",
              {
                className: "relative mt-2",
                children: [
                  jsx(
                    Combobox.Input,
                    {
                      className: "w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                      displayValue: (place) => place?.title,
                      onChange: (event) => setQuery(event.target.value),
                      placeholder: "Type to Search"
                    }
                  ),
                  jsx(
                    Combobox.Button,
                    {
                      className: "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none",
                      children: jsx(
                        ChevronUpDownIcon,
                        {
                          className: "h-5 w-5 text-gray-400",
                          "aria-hidden": "true"
                        }
                      )
                    }
                  ),
                  filteredPlaces && filteredPlaces.length > 0 && jsx(
                    Combobox.Options,
                    {
                      className: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
                      children: filteredPlaces.map((place) => jsx(
                        Combobox.Option,
                        {
                          className: ({ active }) => classNames(
                            "relative cursor-default select-none py-2 pl-3 pr-9",
                            active ? "bg-indigo-600 text-white" : "text-gray-900"
                          ),
                          value: {
                            title: place.name,
                            uuid: place.uuid
                          },
                          children: ({ active, selected }) => jsxs(Fragment, { children: [
                            jsx(
                              "span",
                              {
                                className: classNames("block truncate", selected && "font-semibold"),
                                children: place.name
                              }
                            ),
                            selected && jsx(
                              "span",
                              {
                                className: classNames(
                                  "absolute inset-y-0 right-0 flex items-center pr-4",
                                  active ? "text-white" : "text-indigo-600"
                                ),
                                children: jsx(
                                  CheckIcon,
                                  {
                                    "aria-hidden": "true",
                                    className: "h-5 w-5"
                                  }
                                )
                              }
                            )
                          ] })
                        },
                        place.uuid
                      ))
                    }
                  )
                ]
              }
            )
          }
        )
      }
    ),
    jsx(
      "p",
      {
        className: "h-4 w-full text-red-600",
        children: message
      }
    ),
    selectedPlace && jsxs(
      "div",
      {
        className: "my-8 flex flex-col gap-8",
        children: [
          jsx(Switch.Group, { children: jsxs(
            "div",
            {
              className: "flex items-center",
              children: [
                jsx(
                  Switch.Label,
                  {
                    className: "mr-4",
                    children: "Animate pulsing map marker?"
                  }
                ),
                jsx(
                  Switch,
                  {
                    className: `${props.input.value.animate ? "!bg-blue-600" : "!bg-gray-200"} relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`,
                    defaultChecked: props.input.value.animate,
                    onChange: toggleAnimate,
                    children: jsx(
                      "span",
                      {
                        className: `${props.input.value.animate ? "translate-x-6" : "translate-x-1"} inline-block h-4 w-4 transform rounded-full bg-white transition-transform`
                      }
                    )
                  }
                )
              ]
            }
          ) }),
          jsxs(
            "div",
            {
              className: "flex flex-row gap-6 items-baseline",
              children: [
                jsx(
                  "label",
                  {
                    className: "flex",
                    htmlFor: "buffer",
                    children: "Zoom buffer (defaults to 2 mi)"
                  }
                ),
                jsx("div", { children: jsx(
                  "input",
                  {
                    className: "w-16 rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                    defaultValue: props.input.value?.buffer,
                    id: "buffer",
                    name: "buffer",
                    onChange: onUpdateBuffer,
                    placeholder: "(mi)",
                    type: "number"
                  }
                ) })
              ]
            }
          ),
          selectedPlace.place_layers.length > 0 && jsxs("fieldset", { children: [
            jsx(
              "legend",
              {
                className: "text-base font-semibold leading-6 text-gray-900",
                children: "Layers"
              }
            ),
            jsx(
              "div",
              {
                className: "mt-4 divide-y divide-gray-200 border-b border-t border-gray-200",
                children: selectedPlace.place_layers.map((layer) => jsxs(
                  "div",
                  {
                    className: "relative flex items-start py-4",
                    children: [
                      jsx(
                        "div",
                        {
                          className: "min-w-0 flex-1 text-sm leading-6",
                          children: jsx(
                            "label",
                            {
                              className: "select-none font-medium text-gray-900",
                              htmlFor: `layer-${layer.id}`,
                              children: layer.name
                            }
                          )
                        }
                      ),
                      jsx(
                        "div",
                        {
                          className: "ml-3 flex h-6 items-center",
                          children: jsx(
                            "input",
                            {
                              className: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600",
                              defaultChecked: props.input.value?.layer && props.input.value.layer.includes(layer.id),
                              id: `layer-${layer.id}`,
                              name: `layer-${layer.id}`,
                              onChange: onUpdateLayer,
                              type: "checkbox",
                              value: layer.id
                            }
                          )
                        }
                      )
                    ]
                  },
                  layer.id
                ))
              }
            )
          ] })
        ]
      }
    )
  ] });
});
var TinaPlacePicker_default = TinaPlacePicker;

// tina/content/paths.ts
var Paths = {
  name: "path",
  label: "Paths",
  path: "content/paths",
  format: "mdx",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "string",
      required: true,
      isTitle: true
    },
    {
      name: "image",
      label: "Cover Image",
      type: "image"
    },
    {
      name: "description",
      label: "Description",
      type: "rich-text",
      isBody: true,
      templates: [
        {
          name: "iframe",
          label: "AV Embed",
          fields: [
            {
              name: "src",
              label: "Embed Link",
              type: "string",
              required: true
            },
            {
              name: "width",
              label: "Width (pixels)",
              type: "number",
              ui: {
                parse: (val) => val || 0,
                format: (val) => val === 0 ? null : val
              }
            },
            {
              name: "height",
              label: "Height (pixels)",
              type: "number",
              ui: {
                parse: (val) => val || 0,
                format: (val) => val === 0 ? null : val
              }
            }
          ]
        }
      ]
    },
    {
      name: "path",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.place?.title };
        }
      },
      fields: [
        {
          name: "place",
          label: "Place Data",
          type: "object",
          fields: [
            {
              name: "title",
              label: "Title",
              type: "string",
              required: true,
              isTitle: true
            },
            {
              name: "uuid",
              label: "UUID",
              type: "string"
            },
            {
              name: "animate",
              label: "Animate pulsing place marker?",
              type: "boolean"
            },
            {
              name: "buffer",
              label: "Map zoom buffer (in miles)",
              type: "number"
            },
            {
              name: "layer",
              label: "Custom Map Layer",
              type: "number",
              list: true
            }
          ],
          ui: {
            component: TinaPlacePicker_default
          },
          required: true
        },
        {
          name: "blurb",
          label: "Blurb",
          type: "rich-text",
          templates: [
            {
              name: "iframe",
              label: "AV Embed",
              fields: [
                {
                  name: "src",
                  label: "Embed Link",
                  type: "string",
                  required: true
                },
                {
                  name: "width",
                  label: "Width (pixels)",
                  type: "number",
                  ui: {
                    parse: (val) => val || 0,
                    format: (val) => val === 0 ? null : val
                  }
                },
                {
                  name: "height",
                  label: "Height (pixels)",
                  type: "number",
                  ui: {
                    parse: (val) => val || 0,
                    format: (val) => val === 0 ? null : val
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
var paths_default = Paths;

// tina/content/posts.ts
var Posts = {
  name: "post",
  label: "Posts",
  path: "content/posts",
  format: "mdx",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true
    },
    {
      name: "cardImage",
      label: "Card Image",
      type: "image"
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
      templates: [
        {
          name: "iframe",
          label: "AV Embed",
          fields: [
            {
              name: "src",
              label: "Embed Link",
              type: "string",
              required: true
            },
            {
              name: "width",
              label: "Width (pixels)",
              type: "number",
              ui: {
                parse: (val) => val || 0,
                format: (val) => val === 0 ? null : val
              }
            },
            {
              name: "height",
              label: "Height (pixels)",
              type: "number",
              ui: {
                parse: (val) => val || 0,
                format: (val) => val === 0 ? null : val
              }
            }
          ]
        },
        {
          name: "place",
          label: "Place",
          fields: [
            {
              name: "title",
              label: "Title",
              type: "string",
              required: true,
              isTitle: true
            },
            {
              name: "place",
              label: "Place Data",
              type: "object",
              fields: [
                {
                  name: "title",
                  label: "Title",
                  type: "string",
                  required: true,
                  isTitle: true
                },
                {
                  name: "uuid",
                  label: "UUID",
                  type: "string"
                },
                {
                  name: "animate",
                  label: "Animate pulsing place marker?",
                  type: "boolean"
                },
                {
                  name: "buffer",
                  label: "Map zoom buffer (in miles)",
                  type: "number"
                },
                {
                  name: "layer",
                  label: "Custom Map Layer",
                  type: "number",
                  list: true
                }
              ],
              ui: {
                component: TinaPlacePicker_default
              },
              required: true
            },
            {
              name: "caption",
              label: "Caption",
              type: "string",
              ui: {
                component: "textarea"
              }
            }
          ]
        }
      ]
    }
  ]
};
var posts_default = Posts;

// tina/content/settings.ts
var Settings = {
  name: "settings",
  label: "Settings",
  path: "content/settings",
  format: "json",
  fields: [{
    name: "content",
    label: "Content",
    type: "string",
    list: true
  }, {
    name: "i18n",
    label: "Internationalization",
    type: "object",
    fields: [{
      name: "default_locale",
      label: "Default Locale",
      type: "string"
    }, {
      name: "locales",
      label: "Locales",
      type: "string",
      list: true
    }]
  }, {
    name: "layers",
    label: "Layers",
    type: "object",
    list: true,
    ui: {
      itemProps: (layer) => ({ label: layer.name })
    },
    fields: [{
      name: "name",
      label: "Name",
      type: "string"
    }, {
      name: "layer_type",
      label: "Layer Type",
      type: "string",
      options: [{
        label: "Vector",
        value: "vector"
      }, {
        label: "Raster",
        value: "raster"
      }, {
        label: "GeoJSON",
        value: "geojson"
      }]
    }, {
      name: "url",
      label: "URL",
      type: "string"
    }, {
      name: "overlay",
      label: "Overlay",
      type: "boolean"
    }]
  }, {
    name: "search",
    label: "Search",
    type: "object",
    fields: [{
      name: "cluster_radius",
      label: "Cluster Radius",
      type: "number"
    }, {
      name: "result_card",
      label: "Result Card",
      type: "object",
      fields: [{
        name: "title",
        label: "Title",
        type: "string"
      }, {
        name: "subtitle",
        label: "Subtitle",
        type: "string"
      }]
    }, {
      name: "timeline",
      label: "Timeline",
      type: "boolean"
    }]
  }, {
    name: "typesense",
    label: "Typesense",
    type: "object",
    fields: [{
      name: "host",
      label: "Host",
      type: "string"
    }, {
      name: "port",
      label: "Port",
      type: "number"
    }, {
      name: "protocol",
      label: "Protocol",
      type: "string"
    }, {
      name: "api_key",
      label: "API Key",
      type: "string"
    }, {
      name: "index_name",
      label: "Index Name",
      type: "string"
    }, {
      name: "query_by",
      label: "Query By",
      type: "string"
    }]
  }, {
    name: "core_data",
    label: "Core Data",
    type: "object",
    fields: [{
      name: "url",
      label: "URL",
      type: "string"
    }, {
      name: "project_ids",
      label: "Project IDs",
      type: "string",
      list: true
    }]
  }],
  ui: {
    allowedActions: {
      create: false,
      delete: false
    }
  }
};
var settings_default = Settings;

// tina/config.ts
var isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";
var localContentPath = process.env.TINA_LOCAL_CONTENT_PATH;
var config_default2 = defineConfig({
  authProvider: isLocal ? new LocalAuthProvider() : new UsernamePasswordAuthJSProvider(),
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  contentApiUrlOverride: "/api/tina/gql",
  localContentPath,
  media: {
    loadCustomStore: async () => {
      const pack = await import("next-tinacms-s3");
      return pack.TinaCloudS3MediaStore;
    }
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: _3.compact([
      TinaUserCollection,
      about_default,
      settings_default,
      config_default.content?.includes("paths") ? paths_default : void 0,
      config_default.content?.includes("posts") ? posts_default : void 0,
      i18n_default2
    ])
  }
});
export {
  config_default2 as default
};
