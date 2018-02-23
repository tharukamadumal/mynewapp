import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import {Platform} from 'ionic-angular';
import {AudioProvider} from 'ionic-audio'


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    myTracks: any[];
    allTracks: any[];
    selectedTrack: any;

    constructor(public navCtrl: NavController, public alertCtrl: AlertController, public platform: Platform, private _audioProvider: AudioProvider) {
        this.myTracks = [{
            src: 'https://archive.org/download/JM2013-10-05.flac16/V0/jm2013-10-05-t12-MP3-V0.mp3',
            artist: 'John Mayer',
            title: 'Why Georgia',
            art: 'img/johnmayer.jpg',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        },
        {
            src: 'https://archive.org/download/JM2013-10-05.flac16/V0/jm2013-10-05-t30-MP3-V0.mp3',
            artist: 'John Mayer',
            title: 'Who Says',
            art: 'img/johnmayer.jpg',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
        }];
    }

    ngAfterContentInit() {
        // get all tracks managed by AudioProvider so we can control playback via the API
        this.allTracks = this._audioProvider.tracks;
    }

    playSelectedTrack() {
        // use AudioProvider to control selected track 
        this._audioProvider.play(this.selectedTrack);
    }

    pauseSelectedTrack() {
        // use AudioProvider to control selected track 
        this._audioProvider.pause(this.selectedTrack);
    }

    onTrackFinished(track: any) {
        console.log('Track finished', track)
    }



    openAmaradewa() {
        this.navCtrl.push('TmPage');
    }

    openAmarasiri() {
        this.navCtrl.push('AmarasiriPage');
    }

    openSunil() {
        this.navCtrl.push('SunilPage');
    }

    openTM() {
        this.navCtrl.push('TmPage');
    }

    openVictor() {
        this.navCtrl.push('AmaradewaPage');
    }

    presentHelp() {
        const alert = this.alertCtrl.create({
            title: 'Help උදව් ',
            subTitle: 'ශ්‍රී ලාංකීය ගායක ගායිකාවන්ගේ සිංහල ගීත වල පද රචනයන් බලගැනීම හා එම ගීත ශ්‍රවනය කිරීමට මෙමෙ ඇප් එක මගින් පහසුකම් සලසා ඇත.\n\
            (සැ.යු:- ගීත ශ්‍රවනය කිරීම සඳහා ඔබගේ දුරකතනය අන්තර්ජාලය හා සම්බන්ද වී තිබිය යුතු වේ )',
            buttons: ['Dismiss']
        });
        alert.present();
    }

    exitApp() {
        this.platform.exitApp();
    }
}