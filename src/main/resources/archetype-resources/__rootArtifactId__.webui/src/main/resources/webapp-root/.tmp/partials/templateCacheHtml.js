angular.module("sbamaterial").run(["$templateCache", function($templateCache) {$templateCache.put("app/AppDesigner/appDesigner.html","<div layout=vertical layout-fill><section flex><div ui-view></div><section></section></section></div>");
$templateCache.put("app/AppRunner/appRunner.html","<section layout=row flex><md-sidenav class=\"md-sidenav-left md-whiteframe-z2\" md-component-id=app-side md-is-locked-open=\"$mdMedia(\'gt-md\')\"><md-toolbar class=md-theme-indigo><h1 class=md-toolbar-tools>ello, this is {{runnerCtrl.app.title}}!</h1></md-toolbar><md-list><md-list-item ui-sref=app.form><md-icon class=material-icons aria-label=Menu>assignment</md-icon><p>Form</p></md-list-item><md-list-item ui-sref=app.view><md-icon class=material-icons aria-label=Menu>pageview</md-icon><p>View</p></md-list-item><md-divider></md-divider><md-subheader class=md-no-sticky>Menu</md-subheader><md-list-item ui-sref=app.about><md-icon class=material-icons aria-label=Menu>info</md-icon><p>About</p></md-list-item><md-list-item ng-click=runnerCtrl.toggleMenu() ng-hide=runnerCtrl.showNavBtn><md-icon class=material-icons aria-label=Menu style=margin-left:7px>close</md-icon><p>Close Navigation</p></md-list-item><md-list-item ui-sref=home><md-icon class=material-icons aria-label=Menu>forward</md-icon><p>Verlassen</p></md-list-item><md-divider></md-divider><md-subheader class=md-no-sticky>Administration</md-subheader><md-list-item ui-sref=designer.app.general><md-icon class=material-icons aria-label=Menu>edit</md-icon><p>Designer</p></md-list-item></md-list></md-sidenav><md-button class=md-fab aria-label=\"Mini FAB\" style=position:absolute ng-click=runnerCtrl.toggleMenu() ng-hide=runnerCtrl.showNavBtn><md-icon class=material-icons aria-label=Menu style=\"margin-top: -3px;  color:white\">menu</md-icon></md-button><md-content flex layout-padding><div ui-view></div></md-content></section>");
$templateCache.put("app/main/main.html","<div layout=vertical layout-fill><div layout-fill layout=column><div layout=vertical><div flex=15></div><div flex=70 layout=column><div ng-show=main.showSystemMessages>&nbsp;</div><section flex=30 md-whiteframe=1 ng-show=main.showSystemMessages><md-toolbar class=md-warn><div class=md-toolbar-tools><h2 class=md-flex>{{\'SYSTEMMESSAGES\' | translate}}</h2></div></md-toolbar><md-content flex layout-padding>hello hello</md-content></section><div>&nbsp;</div><section flex><app-card-grid></app-card-grid></section><div>&nbsp; <button class=\"btn btn-lg\" ng-click=main.getOne()>Get One!</button> <button class=\"btn btn-lg\" ng-click=main.getMany()>GetMany!</button> <button class=\"btn btn-lg\" ng-click=main.postOne()>Post One!</button></div><section flex=40 layout=column md-whiteframe=1><md-toolbar><div class=md-toolbar-tools><h2 class=md-flex>{{\'WFINBOX\' | translate}}</h2><span flex></span><md-button ui-sref=wfinbox title=\"Open Workflow Inbox\" aria-label=\"Workflow Inbox\" class=md-icon-button><md-icon class=material-icons aria-label=Launch>launch</md-icon></md-button></div></md-toolbar><md-content flex layout-padding><workflow-inbox></workflow-inbox></md-content></section></div></div></div></div>");
$templateCache.put("app/userProfile/userProfilePage.html","herro");
$templateCache.put("app/wfInbox/wfinbox.html","<div layout=vertical layout-fill><md-content flex layout-padding><workflow-inbox></workflow-inbox></md-content></div>");
$templateCache.put("app/AppDesigner/app/app.html","<md-toolbar class=md-accent><div class=md-toolbar-tools><span flex=15>{{appSettingsCtrl.title}}</span><section><md-button class=md-raised ui-sref=designer.app.settings.general ui-sref-active=md-primary>{{\'DESIGNER.SETTINGS\' | translate}}</md-button><md-button class=md-raised ui-sref=designer.app.formdesigner ui-sref-active=md-primary>{{\'DESIGNER.FORMDESIGNER\' | translate}}</md-button><md-button class=md-raised ui-sref=designer.app.viewdesigner ui-sref-active=md-primary>{{\'DESIGNER.VIEWDESIGNER\' | translate}}</md-button><md-button class=md-raised ui-sref=designer.app.wfengine ui-sref-active=md-primary>{{\'DESIGNER.WFENGINE\' | translate}}</md-button><md-button class=md-raised ui-sref=designer.app.admin.lists ui-sref-active=md-primary>Administration</md-button></section><span flex></span></div></md-toolbar><div ui-view></div>");
$templateCache.put("app/AppDesigner/overview/overview.html","<app-card-grid show-creation=\"\'true\'\"></app-card-grid>");
$templateCache.put("app/AppRunner/about/appAboutPage.html","<div layout=vertical layout-fill>ello, this is {{runnerCtrl.app.title}} about!</div>");
$templateCache.put("app/AppRunner/form/appFormPage.html","<div layout=vertical layout-fill>ello, this is {{runnerCtrl.app.title}} form!</div>");
$templateCache.put("app/AppRunner/view/appViewPage.html","<div layout=vertical layout-fill>ello, this is {{runnerCtrl.app.title}} view!</div>");
$templateCache.put("app/components/appcard/appcard.html","<md-card><md-card-title ng-click=vm.openApp()><md-card-title-media><div class=\"md-media-sm card-media\"></div></md-card-title-media><md-card-title-text><span class=md-headline>{{vm.data.title}}</span> <span class=md-subhead>{{vm.data.version}}</span></md-card-title-text></md-card-title></md-card>");
$templateCache.put("app/components/appcardGrid/appcardgrid.html","<md-grid-list md-cols=3 md-gutter=1em md-row-height=8:3><md-grid-tile ng-repeat=\"app in vm.apps\"><app-card data=app designer=vm.showCreation></app-card></md-grid-tile></md-grid-list>");
$templateCache.put("app/components/navbar/navbar.html","<md-toolbar layout=row layout-align=\"center center\"><md-button ui-sref=home>{{ \'TITLE\' | translate }}</md-button><section flex layout=row layout-align=\"center end\"><md-button ui-sref=designer.overview class=md-raised>{{ \'APPDESIGNERTITLE\' | translate }}</md-button><md-button href=# class=md-raised>{{ \'USERMANAGEMENTTITLE\' | translate }}</md-button></section><md-button class=md-icon-button ui-sref=home><md-icon class=material-icons aria-label=Home>home</md-icon></md-button><md-menu><md-button ng-click=$mdOpenMenu($event) aria-label=\"Open menu\">{{vm.name}}</md-button><md-menu-content><md-menu-item><md-button ui-sref=userprofile>{{ \'PROFILE\' | translate }}</md-button></md-menu-item><md-menu-item><md-button>{{ \'LOGOUT\' | translate }}</md-button></md-menu-item></md-menu-content></md-menu></md-toolbar>");
$templateCache.put("app/components/workflowInbox/workflowinbox.html","<md-list><md-list-item class=md-2-line ng-repeat=\"msg in vm.messages\"><md-checkbox></md-checkbox><div class=md-list-item-text><h3>TITLE</h3><p>Lorem ipsum dolor sit amet.</p></div></md-list-item></md-list>");
$templateCache.put("app/AppDesigner/app/administration/administration.html","<section layout=row flex><md-sidenav class=\"md-sidenav-left md-whiteframe-z2\" md-component-id=app-side md-is-locked-open=\"$mdMedia(\'gt-md\')\"><md-toolbar class=md-theme-indigo><h1 class=md-toolbar-tools>Administration</h1></md-toolbar><md-list><md-list-item ui-sref=designer.app.admin.lists><md-icon class=material-icons aria-label=Menu>assignment</md-icon><p>Lists</p></md-list-item><md-list-item ui-sref=designer.app.admin.users><md-icon class=material-icons aria-label=Menu>pageview</md-icon><p>Users</p></md-list-item><md-list-item ng-click=appAdminPage.toggleMenu() ng-hide=appAdminPage.showNavBtn><md-icon class=material-icons aria-label=Menu style=margin-left:7px>close</md-icon><p>Close Navigation</p></md-list-item></md-list></md-sidenav><md-button class=md-fab aria-label=\"Mini FAB\" style=position:absolute ng-click=appAdminPage.toggleMenu() ng-hide=appAdminPage.showNavBtn><md-icon class=material-icons aria-label=Menu style=\"margin-top: -3px;  color:white\">menu</md-icon></md-button><md-content flex layout-padding><div ui-view></div></md-content></section>");
$templateCache.put("app/AppDesigner/app/settings/settings.html","<section layout=row flex><md-sidenav class=\"md-sidenav-left md-whiteframe-z2\" md-component-id=app-side md-is-locked-open=\"$mdMedia(\'gt-md\')\"><md-toolbar class=md-theme-indigo><h1 class=md-toolbar-tools>Settings</h1></md-toolbar><md-list><md-list-item ui-sref=designer.app.settings.general><md-icon class=material-icons aria-label=Menu>assignment</md-icon><p>{{\'DESIGNER.GENERALSETTINGS\' | translate}}</p></md-list-item><md-list-item ui-sref=designer.app.settings.look><md-icon class=material-icons aria-label=Menu>pageview</md-icon><p>{{\'DESIGNER.LOOK\' | translate}}</p></md-list-item><md-list-item ng-click=appSettingsPage.toggleMenu() ng-hide=appSettingsPage.showNavBtn><md-icon class=material-icons aria-label=Menu style=margin-left:7px>close</md-icon><p>Close Navigation</p></md-list-item></md-list></md-sidenav><md-button class=md-fab aria-label=\"Mini FAB\" style=position:absolute ng-click=appSettingsPage.toggleMenu() ng-hide=appSettingsPage.showNavBtn><md-icon class=material-icons aria-label=Menu style=\"margin-top: -3px;  color:white\">menu</md-icon></md-button><md-content flex layout-padding><div ui-view></div></md-content></section>");
$templateCache.put("app/AppDesigner/app/formDesigner/formDesigner.html","FORMS");
$templateCache.put("app/AppDesigner/app/viewDesigner/viewDesigner.html","VIEWS");
$templateCache.put("app/AppDesigner/app/wfEngine/wfEngine.html","WORKFLOWS");
$templateCache.put("app/AppDesigner/app/administration/lists/listsManagement.html","Lists");
$templateCache.put("app/AppDesigner/app/administration/user/userManagement.html","Users");
$templateCache.put("app/AppDesigner/app/settings/general/general.html","GERNAL");
$templateCache.put("app/AppDesigner/app/settings/look/look.html","LOOKS");}]);