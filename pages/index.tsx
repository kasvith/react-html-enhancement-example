import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Article } from '../components/Article';

export default function Home() {
  const html = `
  <h2>Youtube Vidoe</h2>
  <div class="plyr__video-embed video-player" id="player1">
  <iframe
    src="https://www.youtube.com/embed/bTqVqk7FSmY?iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
    allowfullscreen
    allowtransparency
    allow="autoplay"
  ></iframe>
  </div>

  <h2>Vimeo Video</h2>
  <div class="plyr__video-embed video-player" id="player2">
  <iframe
    src="https://player.vimeo.com/video/76979871?loop=false&amp;byline=false&amp;portrait=false&amp;title=false&amp;speed=true&amp;transparent=0&amp;gesture=media"
    allowfullscreen
    allowtransparency
    allow="autoplay"
  ></iframe>
</div>

<div id="palenight"><pre class="shiki language-jsx" style="background-color: #292D3E"><code><span class="line"><span style="color: #89DDFF; font-style: italic">import</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">*</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF; font-style: italic">as</span><span style="color: #A6ACCD"> React </span><span style="color: #89DDFF; font-style: italic">from</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">'</span><span style="color: #C3E88D">react</span><span style="color: #89DDFF">'</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF; font-style: italic">import</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">'</span><span style="color: #C3E88D">./App.css</span><span style="color: #89DDFF">'</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF; font-style: italic">import</span><span style="color: #A6ACCD"> Hello </span><span style="color: #89DDFF; font-style: italic">from</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">'</span><span style="color: #C3E88D">./components/Hello</span><span style="color: #89DDFF">'</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> logo </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #82AAFF">require</span><span style="color: #A6ACCD">(</span><span style="color: #89DDFF">'</span><span style="color: #C3E88D">./logo.svg</span><span style="color: #89DDFF">'</span><span style="color: #A6ACCD">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C792EA">function</span><span style="color: #A6ACCD"> </span><span style="color: #82AAFF">App</span><span style="color: #89DDFF">()</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">  </span><span style="color: #89DDFF; font-style: italic">return</span><span style="color: #F07178"> (</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">div</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">className</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #C3E88D">App</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #A6ACCD">      </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">div</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">className</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #C3E88D">App-header</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #A6ACCD">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">img</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">src</span><span style="color: #89DDFF">={</span><span style="color: #A6ACCD">logo</span><span style="color: #89DDFF">} </span><span style="color: #C792EA">className</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #C3E88D">App-logo</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">alt</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #C3E88D">logo</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF"> /&gt;</span></span>
<span class="line"><span style="color: #A6ACCD">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">h2</span><span style="color: #89DDFF">&gt;</span><span style="color: #A6ACCD">Welcome to React</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">h2</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #A6ACCD">      </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">div</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #A6ACCD">      </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">p</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">className</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #C3E88D">App-intro</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #A6ACCD">        To get started, edit </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">code</span><span style="color: #89DDFF">&gt;</span><span style="color: #A6ACCD">src/App.tsx</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">code</span><span style="color: #89DDFF">&gt;</span><span style="color: #A6ACCD"> and save to reload.</span></span>
<span class="line"><span style="color: #A6ACCD">      </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">p</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #A6ACCD">      </span><span style="color: #89DDFF">&lt;</span><span style="color: #FFCB6B">Hello</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">name</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #C3E88D">TypeScript</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF"> /&gt;</span></span>
<span class="line"><span style="color: #A6ACCD">    </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">div</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #F07178">  )</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #89DDFF; font-style: italic">export</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF; font-style: italic">default</span><span style="color: #A6ACCD"> App</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre>
</div>
  `;

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <Article html={html}></Article>
      </main>

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
