<template>
  <div class="about-container">
    <h1 class="title">关于作者</h1>
    
    <!-- 个人信息卡片 -->
    <div class="profile-card">
      <div class="avatar-section">
        <img src="/avatar.png" alt="作者头像" class="avatar">
      </div>
      <div class="info-section">
        <h2 class="info-title" style="margin-top:0;">个人信息</h2>
        <div class="info-item">
          <span class="info-icon">👤</span>
          <span class="info-content">YuHongQuan</span>
        </div>
        <div class="info-item">
          <span class="info-icon">💼</span>
          <span class="info-content">前端开发工程师</span>
        </div>
        <div class="info-item">
          <span class="info-icon">📍</span>
          <span class="info-content">广东省东莞市</span>
        </div>
        <div class="info-item">
          <span class="info-icon">✉️</span>
          <span class="info-content">15017872695@163.com</span>
        </div>
      </div>
    </div>

    <!-- 技术栈部分 -->
    <section class="section">
      <h2 class="section-title">技术能力</h2>
      <div class="skills-grid">
        <div class="skill-item" v-for="skill in skills" :key="skill.name">
          <div class="skill-header">
            <span class="skill-icon">{{ skill.icon }}</span>
            <h3 class="skill-name">{{ skill.name }}</h3>
          </div>
          <p class="skill-desc">{{ skill.desc }}</p>
          <div class="skill-progress">
            <div class="progress-bar" :style="`width: ${skill.level}%`"></div>
          </div>
          <span class="skill-percent">{{ skill.level }}%</span>
        </div>
      </div>
    </section>

    <!-- 兴趣爱好 -->
    <section class="section">
      <h2 class="section-title">兴趣爱好</h2>
      <div class="hobbies-grid">
        <div class="hobby-item" v-for="hobby in hobbies" :key="hobby.name">
          <div class="hobby-icon">{{ hobby.icon }}</div>
          <h3 class="hobby-name">{{ hobby.name }}</h3>
          <p class="hobby-desc">{{ hobby.desc }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const skills = [
  { name: 'HTML5/CSS3/JS/TS', level: 90, icon: '🖥️', desc: '熟练掌握前端三件套和TypeScript' },
  { name: 'Vue/React生态', level: 85, icon: '🔄', desc: '熟悉Vue/React及其状态管理(Vuex/Pinia/Redux)' },
  { name: '构建工具', level: 80, icon: '⚙️', desc: '熟悉Webpack/Vite配置和优化' },
  { name: 'UI框架', level: 85, icon: '🎨', desc: '熟悉ElementUI/AntDesign/VantUI/TDesign使用和封装' },
  { name: '跨端开发', level: 75, icon: '📱', desc: '熟悉Uniapp多端开发框架' },
  { name: '微信生态', level: 85, icon: '💬', desc: '丰富的微信小程序/公众号/企业微信开发经验' },
  { name: '网络协议', level: 70, icon: '🌐', desc: '熟悉HTTP/TCP协议及应用' },
  { name: 'VitePress', level: 80, icon: '📄', desc: '熟悉静态站点生成器技术' },
  { name: '开发流程', level: 75, icon: '📊', desc: '熟悉Scrum敏捷开发和Git Flow工作流' },
  { name: '数据可视化', level: 65, icon: '📈', desc: '有大数据可视化平台开发经验' },
  { name: '鸿蒙开发', level: 40, icon: '📱', desc: '了解ArkTS/ArkUI原生应用开发' }
]

const hobbies = [
  { name: '游戏', desc: '《塞尔达传说》系列', icon: '🎮' },
  { name: '音乐', desc: '流行音乐、民谣', icon: '🎵' },
  { name: '篮球', desc: 'NBA、街头篮球', icon: '🏀' },
  { name: '阅读', desc: '技术书籍', icon: '📚' }
]
</script>

<style scoped>
.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--vp-c-text-1);
  position: relative;
}

.title::after {
  content: '';
  display: block;
  width: 80px;
  height: 4px;
  background: var(--vp-c-brand);
  margin: 1rem auto 0;
  border-radius: 2px;
}

/* 个人信息卡片 */
.profile-card {
  display: flex;
  flex-direction: column;
  background: var(--vp-c-bg-soft);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
}

.avatar-section {
  position: relative;
  padding: 2rem;
  text-align: center;
  background: linear-gradient(135deg, var(--vp-c-brand), var(--vp-c-brand-light));
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid white;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  margin: 0 auto; /* 确保头像居中 */
}

.social-links {
  margin-top: 1rem;
  display: flex;
  justify-content: center; /* 社交图标居中 */
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  margin: 0 0.5rem;
  transition: all 0.3s ease;
}

.avatar:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-3px);
}

.info-section {
  padding: 2rem;
}

.info-title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--vp-c-text-1);
  position: relative;
  padding-bottom: 0.5rem;
}

.info-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background: var(--vp-c-brand);
}

.info-item {
  display: flex;
  align-items: center;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--vp-c-divider);
}

.info-icon {
  margin-right: 1rem;
  font-size: 1.2rem;
}

.info-content {
  color: var(--vp-c-text-2);
}

/* 技术能力部分 */
.section {
  margin-bottom: 3rem;
}

.section-title {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: var(--vp-c-text-1);
  position: relative;
  padding-bottom: 0.5rem;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background: var(--vp-c-brand);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.skill-item {
  background: var(--vp-c-bg-soft);
  padding: 1.5rem;
  margin-bottom: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.skill-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.skill-icon {
  font-size: 1.5rem;
  margin-right: 1rem;
}

/* 调整技能名称样式 */
.skill-name {
  font-size: 1.1rem;
  color: var(--vp-c-text-1);
  margin-bottom: 0.5rem;
}

.skill-progress {
  height: 8px;
  background: var(--vp-c-divider);
  border-radius: 4px;
  margin: 1rem 0;
  overflow: hidden;
  position: relative;
}

/* 新增技能描述样式 */
.skill-desc {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin-top: 0.5rem;
  line-height: 1.4;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #2d5a4a, #3a7d63); /* 修改为墨绿色渐变 */
  border-radius: 4px;
  transition: width 0.6s cubic-bezier(0.65, 0, 0.35, 1);
  position: relative;
  overflow: hidden;
}

.progress-bar::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.1)
  );
  animation: progressShine 2s infinite linear;
  transform: translateX(-100%);
}

@keyframes progressShine {
  100% {
    transform: translateX(100%);
  }
}

.skill-percent {
  display: block;
  text-align: right;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

/* 兴趣爱好部分 */
.hobbies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
}

.hobby-item {
  background: var(--vp-c-bg-soft);
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.hobby-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.hobby-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.hobby-name {
  font-size: 1.1rem;
  color: var(--vp-c-text-1);
  margin-bottom: 0.5rem;
}

.hobby-desc {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .profile-card {
    flex-direction: column;
  }
  
  .skills-grid,
  .hobbies-grid {
    grid-template-columns: 1fr;
  }
}
</style>