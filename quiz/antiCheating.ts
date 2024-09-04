type CheatAttempt = {
     type: string;
     timestamp: number;
   };
   
   class AntiCheatingMechanism {
     private cheatAttempts: CheatAttempt[] = [];
     private isActive: boolean = false;
   
     activate() {
       this.isActive = true;
       this.addEventListeners();
     }
   
     deactivate() {
       this.isActive = false;
       this.removeEventListeners();
     }
   
     private addEventListeners() {
       document.addEventListener('visibilitychange', this.handleVisibilityChange);
       document.addEventListener('fullscreenchange', this.handleFullscreenChange);
       window.addEventListener('blur', this.handleWindowBlur);
       document.addEventListener('keydown', this.handleKeyDown, true);
     }
   
     private removeEventListeners() {
       document.removeEventListener('visibilitychange', this.handleVisibilityChange);
       document.removeEventListener('fullscreenchange', this.handleFullscreenChange);
       window.removeEventListener('blur', this.handleWindowBlur);
       document.removeEventListener('keydown', this.handleKeyDown, true);
     }
   
     private handleVisibilityChange = () => {
       if (this.isActive && document.hidden) {
         this.logCheatAttempt('Tab Change');
       }
     };
   
     private handleFullscreenChange = () => {
       if (this.isActive && !document.fullscreenElement) {
         this.logCheatAttempt('Exited Fullscreen');
       }
     };
   
     private handleWindowBlur = () => {
       if (this.isActive) {
         this.logCheatAttempt('Window Blur');
       }
     };
   
     private handleKeyDown = (event: KeyboardEvent) => {
       if (this.isActive && (event.ctrlKey || event.altKey || event.metaKey)) {
         event.preventDefault();
         this.logCheatAttempt(`Hotkey: ${event.key}`);
       }
     };
   
     private logCheatAttempt(type: string) {
       this.cheatAttempts.push({ type, timestamp: Date.now() });
     }
   
     getCheatAttempts() {
       return this.cheatAttempts;
     }
   
     clearCheatAttempts() {
       this.cheatAttempts = [];
     }
   }
   
   export const antiCheatingMechanism = new AntiCheatingMechanism();