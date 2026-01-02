import WindowControls from '#components/WindowControls'
import WindowWrapper from '#hoc/WindowWrapper'
import { Search,ChevronLeft, ChevronRight,PanelLeft, ShieldHalf, Share, Plus, Copy, MoveRight } from 'lucide-react'
import React from 'react'
import { blogPosts } from '#constants'

const Safari = () => {
  return (
    <>
    <div id="window-header">
        <WindowControls target="safari"/>
        <PanelLeft className='ml-10 icon'/>
        <div className="flex items-center gap-1 ml-5">
            <ChevronLeft className='icon'/>
            <ChevronRight className='icon'/>
        </div>
        <div className="flex-1 flex-center gap-3">
            <ShieldHalf className='icon'/>
            <div className="search">
                <Search className="icon"/>
                <input type="text" 
                placeholder='Search or enter website name'
                className="flex-1" />
            </div>

        </div>
        <div className="flex items-center gap-5">
            <Share className="icon"/>
            <Plus className="icon"/>
            <Copy className="icon"/>
        </div>    
    </div>

    <div className="blog">
        <h2>My Research Work</h2>
        <div className="research-summary space-y-4 text-gray-700 text-base md:text-sm leading-relaxed mb-8">
  <p>
    I’m excited to share some recent milestones in my research journey! My <strong>Research Interest Score</strong> is <strong>25.6</strong>, placing me above 40% of all ResearchGate members and 83% of members who first published in 2023.
  </p>
  
  <p>
    My work has received <strong>661 reads</strong> (+9 last week), <strong>27 citations</strong>, and <strong>1 recommendation</strong>.
  </p>
  
  <p>
    Breaking down the score, 52.8% comes from citations, 29.4% from full-text reads, 16.8% from other reads, and 1% from recommendations. These metrics reflect growing engagement with my publications and motivate me to continue contributing meaningful research to the community.
  </p>
</div>
        
        <div className="space-y-8">
            {blogPosts.map(({id,image, title, link})=> (
                <div key={id} className="blog-post">
                <div className="col-span-2">
                    <img src={image} alt={title} />
                </div>
                <div className="content">
                    
                    <h3>{title}</h3>
                    <a href={link} target='_blank' rel='noopener noreferrer' >
                        Checkout <MoveRight className='icon-hover'/>
                    </a>

                </div>

            </div>

            ))}

        </div>
    </div>

    </>
  )
}

const SafariWindow = WindowWrapper(Safari, 'safari')

export default SafariWindow;