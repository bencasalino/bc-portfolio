import Vue from "vue";
import Router from "vue-router";
// banner // default
import Banner from "@/components/Banner";

// music art etc
import AboutMe from "@/components/AboutMe";
import BenoftheUniverse from "@/components/BenoftheUniverse";
import Art from "@/components/Art";

//exp
import Overview from "@/components/Overview";

// projects
import Project_CSG from "@/components/Project_CSG";
import Project_SFDOC from "@/components/Project_SFDOC";
import Project_Cloud from "@/components/Project_Cloud";
import Project_TF from "@/components/Project_TF";
import Project_Nuggets from "@/components/Project_Nuggets";
import Project_Walk from "@/components/Project_Walk";
import Project_Clymb from "@/components/Project_Clymb";
import Project_Nash from "@/components/Project_Nash";
import Project_Multnomah from "@/components/Project_Multnomah";
import Project_Wacom from "@/components/Project_Wacom";
import Project_G70 from "@/components/Project_G70";
import Project_Where from "@/components/Project_Where";
import Project_RmCup from "@/components/Project_RmCup";
import Project_Taco from "@/components/Project_Taco";
import Project_Periodic from "@/components/Project_Periodic";
import Project_BSFB from "@/components/Project_BSFB";
import Project_PlusQA from "@/components/Project_PlusQA";
// import Project_BSFBLogos from "@/components/Project_BSFBLogos";
import Project_Piano from "@/components/Project_Piano";

// resume
import resume from "@/components/resume";

// import Project_GCO from "@/components/Project_GCO";
// import Project_BOTU from "@/components/Project_BOTU";
// import Project_Dragic from "@/components/Project_Dragic";
// import Project_Jon from "@/components/Project_Jon";
// import Project_Adam from "@/components/Project_Adam";
// import Project_Ben from "@/components/Project_Ben";
// import Project_Rafa from "@/components/Project_Rafa";
// import Project_DBBOA from "@/components/Project_DBBOA";
// import Project_Canvas from "@/components/Project_Canvas";
// import Project_RMCup from "@/components/Project_RMCup";
// import Project_Pixel from "@/components/Project_Pixel";
// import Project_TopPicks from "@/components/Project_TopPicks";
// import Project_Mammoth from "@/components/Project_Mammoth";
// import Project_KeyDrums from "@/components/Project_KeyDrums";
// import Project_CasChiro from "@/components/Project_CasChiro";
// import Project_Quark from "@/components/Project_Quark";
// import Project_Elec from "@/components/Project_Elec";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Banner",
      component: Banner
    },
    {
      path: "/Project_CSG",
      name: "Project_CSG",
      component: Project_CSG
    },
    {
      path: "/Project_SFDOC",
      name: "Project_SFDOC",
      component: Project_SFDOC
    },
    {
      path: "/Project_Cloud",
      name: "Project_Cloud",
      component: Project_Cloud
    },
    {
      path: "/Project_TF",
      name: "Project_TF",
      component: Project_TF
    },
    {
      path: "/Project_Nuggets",
      name: "Project_Nuggets",
      component: Project_Nuggets
    },
    {
      path: "/Project_Walk",
      name: "Project_Walk",
      component: Project_Walk
    },
    {
      path: "/Project_Clymb",
      name: "Project_Clymb",
      component: Project_Clymb
    },
    {
      path: "/Project_Nash",
      name: "Project_Nash",
      component: Project_Nash
    },
    {
      path: "/Project_Multnomah",
      name: "Project_Multnomah",
      component: Project_Multnomah
    },
    {
      path: "/Project_Wacom",
      name: "Project_Wacom",
      component: Project_Wacom
    },
    {
      path: "/Project_G70",
      name: "Project_G70",
      component: Project_G70
    },
    {
      path: "/Project_Where",
      name: "Project_Where",
      component: Project_Where
    },
    {
      path: "/Project_RmCup",
      name: "Project_RmCup",
      component: Project_RmCup
    },
    {
      path: "/Project_Periodic",
      name: "Project_Periodic",
      component: Project_Periodic
    },
    {
      path: "/Project_Taco",
      name: "Project_Taco",
      component: Project_Taco
    },
    {
      path: "/Project_BSFB",
      name: "Project_BSFB",
      component: Project_BSFB
    },
    {
      path: "/Project_PlusQA",
      name: "Project_PlusQA",
      component: Project_PlusQA
    },
    {
      path: "/Project_Piano",
      name: "Project_Piano",
      component: Project_Piano
    },
    {
      path: "/AboutMe",
      name: "AboutMe",
      component: AboutMe
    },
    {
      path: "/BenoftheUniverse",
      name: "BenoftheUniverse",
      component: BenoftheUniverse
    },
    {
      path: "/Art",
      name: "Art",
      component: Art
    },
    {
      path: "/Overview",
      name: "Overview",
      component: Overview
    },
    {
      path: "/resume",
      name: "resume",
      component: resume
    }

    // {
    //   path: "/Project_RMCup",
    //   name: "Project_RMCup",
    //   component: Project_RMCup
    // },
    // {
    //   path: "/Project_Pixel",
    //   name: "Project_Pixel",
    //   component: Project_Pixel
    // },
    // {
    //   path: "/Project_TopPicks",
    //   name: "Project_TopPicks",
    //   component: Project_TopPicks
    // },
    // {
    //   path: "/Project_Mammoth",
    //   name: "Project_Mammoth",
    //   component: Project_Mammoth
    // },
    // {
    //   path: "/Project_KeyDrums",
    //   name: "Project_KeyDrums",
    //   component: Project_KeyDrums
    // },
    // {
    //   path: "/Project_CasChiro",
    //   name: "Project_CasChiro",
    //   component: Project_CasChiro
    // },
    // {
    //   path: "/Project_Quark",
    //   name: "Project_Quark",
    //   component: Project_Quark
    // },
    // {
    //   path: "/Project_Elec",
    //   name: "Project_Elec",
    //   component: Project_Elec
    // },
    // {
    //   path: "/Project_GCO",
    //   name: "Project_GCO",
    //   component: Project_GCO
    // },
    // {
    //   path: "/Project_BOTU",
    //   name: "Project_BOTU",
    //   component: Project_BOTU
    // },
    // {
    //   path: "/Project_Dragic",
    //   name: "Project_Dragic",
    //   component: Project_Dragic
    // },
    // {
    //   path: "/Project_Adam",
    //   name: "Project_Adam",
    //   component: Project_Adam
    // },
    // {
    //   path: "/Project_Ben",
    //   name: "Project_Ben",
    //   component: Project_Ben
    // },
    // {
    //   path: "/Project_Jon",
    //   name: "Project_Jon",
    //   component: Project_Jon
    // },
    // {
    //   path: "/Project_Rafa",
    //   name: "Project_Rafa",
    //   component: Project_Rafa
    // },
    // {
    //   path: "/Project_DBBOA",
    //   name: "Project_DBBOA",
    //   component: Project_DBBOA
    // },
    // {
    //   path: "/Project_Canvas",
    //   name: "Project_Canvas",
    //   component: Project_Canvas
    // },
  ]
});
