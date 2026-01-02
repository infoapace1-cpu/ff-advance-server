import React, { useState } from 'react';

import { Header } from './Header';
import { Footer } from './Footer';
import { Section } from './Section';
import { Button } from './Button';
import { DownloadTable } from './DownloadTable';
import { FireBackground } from './FireBackground';
import { HeroHUD } from './HeroHUD';
import { ScrollReveal } from './ScrollReveal';
import { TableOfContents } from './TableOfContents';
import { FAQAccordion } from './FAQAccordion';
import { ShareModal } from './ShareModal';

import { FEATURES, INSTALL_STEPS, FAQS } from './constants';

import {
  Download,
  ChevronRight,
  HelpCircle,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Trophy,
  Zap,
  Target,
  Star,
  Gift,
  User,
  Share2
} from 'lucide-react';

function App() {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  return (
    <div className="bg-gaming-darker min-h-screen text-slate-200">
      <Header />
      
      <ShareModal 
        isOpen={isShareModalOpen} 
        onClose={() => setIsShareModalOpen(false)} 
      />

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-4 md:px-8 overflow-hidden min-h-[80vh] flex items-center">
        {/* Animated Backgrounds */}
        <FireBackground />
        <HeroHUD />
        
        {/* Static Background Accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gaming-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <ScrollReveal>
            <div className="inline-block px-3 py-1 bg-gaming-primary/10 border border-gaming-primary/20 rounded-full text-gaming-primary text-xs font-bold uppercase tracking-wider mb-6 animate-pulse-slow">
              Latest Version: OB51
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
              FF Advance Server <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gaming-primary to-gaming-accent relative inline-block">
                Download OB51
              </span>
              <br/>
              <span className="text-2xl md:text-3xl text-white block mt-2">For Android 2025</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-lg drop-shadow-md">
              FF Advance Sever is a program that was created by the Free Fire game. This program allows players to test out new and fresh content for Free Fire before it is released to the general public.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => document.getElementById('download-details')?.scrollIntoView({ behavior: 'smooth' })}>
                <Download className="w-5 h-5" /> Download Now
              </Button>
              <Button variant="outline" onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}>
                Registration Guide
              </Button>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay="0.2s" className="relative group">
            <DownloadTable />
          </ScrollReveal>
        </div>
      </section>

      {/* Intro Content & TOC */}
      <Section id="intro" altBackground>
        <div className="prose prose-invert max-w-none text-slate-300">
          <div className="flex justify-between items-center mb-6">
            <span className="text-sm text-gaming-primary font-bold tracking-wider uppercase">Overview</span>
            <button 
              onClick={() => setIsShareModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-slate-800/80 hover:bg-gaming-primary text-slate-300 hover:text-white rounded-full transition-all duration-300 text-sm font-bold border border-slate-700 hover:border-gaming-primary/50 shadow-lg hover:shadow-gaming-primary/25 group"
            >
              <Share2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Share
            </button>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            It is a testing ground of sorts and is a beta testing site for the new content and features that are yet to be released. Only specific players can access the FF Advance Server and you will have to complete the registration process before you can use the FF Advance Server.
          </p>
          <p className="mb-6">
            Free Fire is a game that has gained much in the way of popularity. This incentivizes the creators to release regular updates to the game. The developers of the FF Download OB51 release beta updates which are tested by skilled players of Free Fire.
          </p>
          <div className="bg-slate-800/50 border-l-4 border-gaming-primary p-4 rounded-r-lg mb-8">
            <p className="italic m-0">
              This is done by registering with the FF Advance Server program and testing out new features. The feedback garnered as a result of this effort is used to streamline and fix any bugs that the players denote during their testing phase.
            </p>
          </div>
          
          <TableOfContents />
        </div>
      </Section>

      {/* Features */}
      <Section id="features" title="FF Advance Server Features" subtitle="What makes it special">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
           {FEATURES.map((feature, idx) => (
             <div key={idx} className="bg-gaming-card p-6 rounded-xl border border-slate-700 transition-all duration-300 hover:border-gaming-primary/50 hover:-translate-y-2 hover:scale-105 hover:shadow-xl hover:shadow-gaming-primary/10">
               <feature.icon className="w-10 h-10 text-gaming-accent mb-4" />
               <h4 className="font-bold text-white text-xl mb-2">{feature.title}</h4>
               <p className="text-slate-400">{feature.description}</p>
             </div>
           ))}
           <div className="bg-gaming-card p-6 rounded-xl border border-slate-700 transition-all duration-300 hover:border-gaming-primary/50 hover:-translate-y-2 hover:scale-105 hover:shadow-xl hover:shadow-gaming-primary/10">
              <CheckCircle className="w-10 h-10 text-gaming-accent mb-4" />
              <h4 className="font-bold text-white text-xl mb-2">Exclusive Access</h4>
              <p className="text-slate-400">Players get to check out the new features that aren’t available in the main Free Fire game.</p>
           </div>
           <div className="bg-gaming-card p-6 rounded-xl border border-slate-700 transition-all duration-300 hover:border-gaming-primary/50 hover:-translate-y-2 hover:scale-105 hover:shadow-xl hover:shadow-gaming-primary/10">
              <Target className="w-10 h-10 text-gaming-accent mb-4" />
              <h4 className="font-bold text-white text-xl mb-2">Community</h4>
              <p className="text-slate-400">The players of FF Advance Server can become a part of the dynamic Free Fire community.</p>
           </div>
        </div>

        <div className="bg-gaming-darker p-8 rounded-2xl border border-slate-800">
          <h3 id="significance" className="text-2xl font-bold text-white mb-4">Significance of Downloading FF Advance Server</h3>
          <p className="text-slate-300 mb-4">
            You shouldn’t go for the FF Advance Server if you aren’t a skilled player. You should only download Free Fire OB51 if you are a pro player of Free Fire because otherwise, it isn’t for you.
          </p>
          <p className="text-slate-300 mb-4">
            That is because you will have to test new features and content that aren’t available in the main game. You need to be great at the Free Fire game if you want to stand a chance against the challenges that you face in the FF Advance Server.
          </p>
          <p className="text-slate-300">
            The developers of FF Advance Server are more focused on receiving feedback about the new content and this can only be rendered by players who are adept at the FF Advance download version.
          </p>
        </div>
      </Section>

      {/* Registration */}
      <Section id="register" title="FF Advance Server Registration Process" subtitle="How to join the program" altBackground>
        <div className="max-w-4xl mx-auto">
          <p className="text-slate-300 mb-6">
            There is a whole process that you need to complete to register for the FF Advance Server. The steps involved in this process are as follows:
          </p>
          <div className="space-y-4">
            {[
              "First of all, you will have to visit the site of the FF Advance Server.",
              "Now, click on the login from Google or Facebook option from the following webpage.",
              "You can sign up from either Facebook, Google, or any other platform that you created your Free Account with.",
              "Now, you will be redirected to a new page where you will have to enter your personal information to complete the signup process.",
              "Once you have entered the required information, you will have to click on the “Join Now” tab to continue.",
              "You will receive a confirmation email along with an activation code from the Developers if you are selected for the FF Advance Server program.",
              "You can enter the code into the FF Advance Server APK after downloading it to start playing immediately.",
              "You can keep trying again and again if you don’t receive the Activation code for the FF Advance Server. You will eventually be selected."
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4 bg-gaming-darker p-4 rounded-lg border border-slate-800">
                <div className="bg-gaming-primary text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </div>
                <p className="text-slate-300 pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* What it Offers */}
      <Section id="offers" title="What FF Advance Server Offers" subtitle="Why it's a superb package for players">
        <p className="text-slate-300 mb-8 max-w-4xl mx-auto">
          The FF Advance Server is a superb package for players who love Free Fire, the phenomenal game from Garena. The FF Advance Server is a testing ground of sorts that allows players with exceptional skills to test out new content and experience Free Fire like never before.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
             <div>
               <h4 className="text-xl font-bold text-gaming-accent mb-2">Access to Exclusive New Features</h4>
               <p className="text-slate-400">The first and most attractive aspect of the FF Advance Server is that it allows players to experience new content such as weapons, modes, characters, events, and much more. All of these features are experienced firsthand by the FF Advance Server’s users. This is great for those players who want to experience new things before they are released for the main Free Fire game.</p>
             </div>
             <div>
               <h4 className="text-xl font-bold text-gaming-accent mb-2">Reporting Bugs and Receiving Rewards</h4>
               <p className="text-slate-400">Accessing FF Advance Server doesn’t mean that you only have to play and experience new content. There is another important aspect attached to the FF Advance Server and it is related to detecting bugs with the new content. Users who come across these bugs will have to report them to the developers.</p>
             </div>
             <div>
               <h4 className="text-xl font-bold text-gaming-accent mb-2">Improved Game Balance</h4>
               <p className="text-slate-400">The other great thing that FF Advance Server offers you is that it enables you to create a better and more balanced experience. You will be contributing to making Free Fire a better and more stable game by detecting and eliminating Bugs. This makes the new content more streamlined and effective so that it can perform impeccably when it’s released on the main Free Fire version.</p>
             </div>
             <div>
               <h4 className="text-xl font-bold text-gaming-accent mb-2">Influence over the Community</h4>
               <p className="text-slate-400">The FF Advance Server is a great way to boost your cred within the Free Fire community. That is because the FF Advance Server allows the user to contribute and have a say in the development of the game. That is because the feedback from the players is imperative for molding and regulating the final version of the new content.</p>
             </div>
          </div>
          
          <div className="bg-gradient-to-br from-gaming-primary/20 to-purple-900/20 p-8 rounded-2xl border border-gaming-primary/30 flex flex-col justify-center items-center text-center h-fit sticky top-24">
            <Trophy className="w-16 h-16 text-yellow-400 mb-4 animate-bounce" />
            <h3 id="reward" className="text-3xl font-extrabold text-white mb-2">1000 Diamonds Reward</h3>
            <p className="text-slate-300 mb-6">
              You need diamonds in Free Fire to stand a chance against the competition. There is a sweet way to collect these diamonds by playing FF Advance Server. You will receive 1000 diamonds from the developers if you locate a bug in the FF OB51 Update Download version.
            </p>
            <p className="text-slate-300 text-sm mb-4">
              For example, if you locate any error or bug in the FF Advance Server program, you can report it to the developers. You will be rewarded with 1000 diamonds in the game for reporting this bug.
            </p>
            <div className="text-sm text-slate-400 bg-black/30 p-4 rounded-lg">
              "Remember to report the bug because otherwise, you won’t be eligible for claiming the 1000 diamonds reward from FF Advance Server."
            </div>
          </div>
        </div>
      </Section>

      {/* Downloading & OB Version */}
      <Section id="download-ob" title="FF Advance Server OB51" altBackground>
        <div className="prose prose-invert max-w-none text-slate-300 mb-8">
          <p className="mb-4">
            You will normally receive the activation code for the FF Advance Server if you are selected for the program. The activation code’s email will also contain a link for downloading the FF Advance Server APK file. You can download it from there and simply input the activation code to start playing FF Advance Server.
          </p>
          <p className="mb-4">
            On the other hand, you can download the FF Advance Server from here as well and continue to enter your activation code to start playing it anyway.
          </p>
          <h3 id="ob51" className="text-xl font-bold text-white mb-3 mt-8">FF Advance Server OB51</h3>
          <p className="mb-4 font-semibold text-white">
            FF Advance Server OB51 is the latest in a long line of updates for FF Advance Server. Players who are interested in having a go at beta testing can use it to test new content. This new content will later hit the main Free Fire game.
          </p>
          <p>
            You will be rewarded for playing FF Advance Server OB51 and delineating any bugs or issues with the new features or content. In doing so, you will be rewarded and the experience will be immensely rewarding as well.
          </p>
        </div>
      </Section>

      {/* Upcoming OB Version */}
      <Section id="upcoming" title="Upcoming OB Version Content" subtitle="What's in store for OB51?">
        <p className="text-center text-slate-300 mb-8 max-w-3xl mx-auto">
          The FF Advance Server for the upcoming Open Beta or OB version is going to bring a lot of new content and features to the Free Fire server. The FF Advance Server will bring plenty of new gameplay updates, enhancements, and features.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { t: "New Abilities and Characters", d: "Garena is going to introduce some new characters with unique special abilities in the upcoming OB version. These new characters will be tested in the FF Advance Server by the players and their unique skills and abilities will be tested to the maximum extent possible." },
            { t: "New Pets", d: "FF Advance Server has plenty of pets that make the game more innovative and interesting. The new update of the FF Advance Server OB Version will bring new pets for testing as well. This will allow players to experience these new pets and assess how they complement different characters." },
            { t: "New Weapons", d: "One of the best and most attractive new additions to the FF Advance Server’s upcoming OB version are new weapons and balance adjustments that will be made to present ones. The FF Advance Server will allow players to experience these new weapons and report about each one’s firing capabilities and balance." },
            { t: "New Locations", d: "FF Advance Server’s new update will bring with it new locations and map enhancements to check out. This is great for those players who are looking for something new and want to experience new arenas and their included challenges." },
            { t: "New Game Modes", d: "Garena frequently experiments with new game modes, challenges, and limited-time events on the FF Advance Server. These events and modes allow players to experience new objectives, gameplay mechanics, and more. This adds variety to the Free Fire experience." },
            { t: "Updates to Gameplay Mechanics", d: "The gameplay mechanics are also reportedly getting updates in the upcoming OB version. This will include animations, healing, armor, movement options, vehicle mechanics, etc. These updates will improve the gameplay for the better." },
            { t: "Graphics and Interface Updates", d: "The developers are also intending to test graphical improvements and interface changes on the FF Advance Server. These updates will come with improved visuals, textures, effects, streamlined menus, user interface, and more." }
          ].map((item, i) => (
            <div key={i} className="bg-gaming-darker p-5 rounded-lg border border-slate-800">
              <h4 className="font-bold text-white mb-2">{item.t}</h4>
              <p className="text-sm text-slate-400">{item.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Eligibility */}
      <Section id="eligibility" title="Eligibility for Playing FF Advance Server" altBackground>
        <div className="max-w-4xl mx-auto">
          <p className="text-slate-300 mb-6">
            The FF Advance Server is a testing ground of sorts. We call it a testing ground because this is where advanced players will be able to test out new content and features before they are released for the main Free Fire game. The experience is very rewarding and fulfilling and will make the FF Advance Server an unforgettable experience.
          </p>
          <div className="bg-gaming-card p-8 rounded-2xl border border-slate-700 shadow-xl mb-12">
            <h3 className="text-xl font-bold text-white mb-6">Eligibility Criteria</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-gaming-primary flex-shrink-0" />
                <span className="text-slate-300">The first thing that you need to know about the FF Advance Server is that you can’t play it if you are under <strong>18 years of age</strong>.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-gaming-primary flex-shrink-0" />
                <span className="text-slate-300">You must have a registered and valid <strong>Facebook or Gmail account</strong>. You will then have to link it with Garena’s official Free Fire servers and get it verified.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-gaming-primary flex-shrink-0" />
                <span className="text-slate-300">You should be a player of the <strong>original Free Fire game</strong>. There is no point applying if you don’t have a prior idea about the original game.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-gaming-primary flex-shrink-0" />
                <span className="text-slate-300">The FF Advance Server is only available in <strong>select global regions</strong>. You will have to be a resident of these regions.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-gaming-primary flex-shrink-0" />
                <span className="text-slate-300">You must be an <strong>expert and advanced-level player</strong> of Free Fire. Only the best players are invited to test out the new features.</span>
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gaming-darker p-6 rounded-xl border border-slate-800">
              <h3 id="vs-free-fire" className="text-xl font-bold text-white mb-4">FF Advance Server vs Free Fire</h3>
              <p className="text-slate-400">
                The main difference between FF Advance Server and Free Fire is that players can utilize improved features, new weapons, costumes, and different skins in FF Advance Server. These features and content are not available for the main game and are tested in FF Advance Server. They are then released later on the Free Fire version after being tested on the FF Advance Server.
              </p>
            </div>
            <div className="bg-gaming-darker p-6 rounded-xl border border-slate-800">
              <h3 id="new-things" className="text-xl font-bold text-white mb-4">New Things in FF Advance Server</h3>
              <ul className="space-y-2 text-slate-400 list-disc pl-5">
                <li>Players will no longer experience the stutter and lagging issues.</li>
                <li>Players will experience several optimized features that will accentuate their gaming.</li>
                <li>The new version will include new and unique characters and the current roster will increase.</li>
                <li>The sensitivity setting of Free Fire will be adjusted per your device.</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Pros and Cons */}
      <Section id="pros-cons" title="Pros and Cons of FF Advance Server">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-green-900/10 border border-green-500/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" /> Pros
            </h3>
            <ul className="space-y-3">
              <li className="text-slate-300 text-sm">• The FF Advance Server accords players the chance to experience the newest and untested features of Free Fire.</li>
              <li className="text-slate-300 text-sm">• This gives players a novel advantage over the other players.</li>
              <li className="text-slate-300 text-sm">• The FF Advance Server endows players with different rewards that can be used in-game.</li>
              <li className="text-slate-300 text-sm">• The downloading process for FF Advance Server is fairly simple and not convoluted at all.</li>
            </ul>
          </div>
          
          <div className="bg-red-900/10 border border-red-500/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
              <XCircle className="w-5 h-5" /> Cons
            </h3>
            <ul className="space-y-3">
              <li className="text-slate-300 text-sm">• The FF Advance Sever has limited registration slots and not all aspirants will be able to gain access.</li>
              <li className="text-slate-300 text-sm">• You have to provide feedback while playing the game. You will be kicked out if you don’t.</li>
              <li className="text-slate-300 text-sm">• You can’t invite other players to join in on the fun in the FF Advance Server.</li>
              <li className="text-slate-300 text-sm">• There is the possibility of some bugs and issues disrupting your gameplay experience.</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Installation Guide */}
      <Section id="install" title="How to Download & Install FF Advance Server APK" subtitle="Step-by-step guide" altBackground>
        <p className="text-center text-slate-300 mb-8">You can follow these steps to download and install the ff Advanced Server easily on your device:</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTALL_STEPS.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-gaming-darker p-6 rounded-xl border border-slate-800 h-full hover:shadow-[0_0_20px_rgba(249,115,22,0.15)] hover:border-gaming-primary/30 transition-all duration-300 z-10 relative">
                <div className="w-12 h-12 bg-gaming-card rounded-full flex items-center justify-center mb-6 text-gaming-primary font-bold text-xl border border-slate-700 group-hover:border-gaming-primary group-hover:scale-110 group-hover:text-white group-hover:bg-gaming-primary transition-all shadow-lg">
                  {index + 1}
                </div>
                <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <step.icon className="w-5 h-5 text-gaming-accent" />
                  {step.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
              {index < INSTALL_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-slate-700 z-0">
                  <ChevronRight className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Why Download */}
      <Section id="why-download" title="Why should you download the FF Advance Server">
        <p className="text-slate-300 mb-8 max-w-4xl mx-auto">
          The FF Advance Server is a great tool and in the hands of expert Free Fire players, it can be a great and fulfilling experience. There are certain benefits that you can reap when you opt to access the FF Advance Server.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gaming-card p-6 rounded-lg border border-slate-700">
             <h4 className="font-bold text-white text-xl mb-3 flex items-center gap-2"><Star className="text-gaming-accent"/> Experience Amazing New Content</h4>
             <p className="text-slate-400">The first thing that you can count on when you play the FF Advance Server is that you will be able to experience brand-new, novel, and fresh content. The latter includes new characters, weapons, modes, and much more. You will be able to experience these new features before anyone else and have one blast of a time.</p>
          </div>
          <div className="bg-gaming-card p-6 rounded-lg border border-slate-700">
             <h4 className="font-bold text-white text-xl mb-3 flex items-center gap-2"><Zap className="text-gaming-accent"/> Shaping Game Development</h4>
             <p className="text-slate-400">The other thing that you can look forward to is making a difference in the game. The FF Advance Server allows users to get unique insights into the game. This bug detection will allow the developers to eliminate them before releasing the new content to the main Free Fire game.</p>
          </div>
          <div className="bg-gaming-card p-6 rounded-lg border border-slate-700">
             <h4 className="font-bold text-white text-xl mb-3 flex items-center gap-2"><Gift className="text-gaming-accent"/> Earn Rewards</h4>
             <p className="text-slate-400">Just playing FF Advance Server is pretty enriching. However, developers tend to sweeten the deal even more by offering rewards for detecting and reporting bugs. Users can look forward to some nifty rewards like Diamonds to be used in the game.</p>
          </div>
          <div className="bg-gaming-card p-6 rounded-lg border border-slate-700">
             <h4 className="font-bold text-white text-xl mb-3 flex items-center gap-2"><Trophy className="text-gaming-accent"/> Gain an Edge over the Competition</h4>
             <p className="text-slate-400">You will be able to gain a leg over the competition if you are accepted into the FF Advance Server. You will have a more informed grasp of the new weapons, features, content, modes, etc. before they are released into the main game. This will provide you with a palpable advantage.</p>
          </div>
          <div className="bg-gaming-card p-6 rounded-lg border border-slate-700 md:col-span-2">
             <h4 className="font-bold text-white text-xl mb-3 flex items-center gap-2"><User className="text-gaming-accent"/> An Exclusive Community</h4>
             <p className="text-slate-400">The FF Advance Server only accepts a select few users in every respective testing phase. You will be a part of an exclusive and prestigious community of testers if you join the FF Advance Server. You get earlier access to new content and features while also being eligible for exclusive boasting rights as well.</p>
          </div>
        </div>
      </Section>

      {/* Download Info & FAQ */}
      <Section id="download-details" title="Downloading Details of FF Advance Server APK" subtitle="Latest version info" altBackground>
        <div className="mb-12">
           <DownloadTable />
        </div>

        <h3 id="faq" className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h3>
        <FAQAccordion items={FAQS} />
      </Section>

      {/* Conclusion */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-gaming-darker to-black text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">CONCLUSION</h2>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed">
            So, if you are a fan of Free Fire and want to experience it like never before then we highly recommend that you get yourself registered for the FF Advance Server program. You will be in for the treat of a lifetime and will be participating in making Free Fire a better game through your efforts. So, buckle up and take your gaming to the next level with the FF Advance Server. This is a decision that you will not regret Download from our site right now.
          </p>
          <Button size="lg" onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}>
            Go to Top
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
